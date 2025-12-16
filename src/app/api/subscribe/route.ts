import { NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY;

export async function POST(request: Request) {
  try {
    const { email, source } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    // Add contact to Resend audience
    // First, let's send a welcome email to confirm they subscribed
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Wacky Works Digital <hello@wearewacky.com>",
        to: email,
        subject: "🤖 Welcome to the Wacky list!",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="font-size: 24px; margin-bottom: 20px;">Welcome to Wacky Works! 🎉</h1>
            
            <p>Thanks for signing up${source ? ` via ${source}` : ""}!</p>
            
            <p>You're now on our list for:</p>
            <ul>
              <li>Early access to new AI tools & automations</li>
              <li>Tips on saving time with automation</li>
              <li>Behind-the-scenes of what we're building</li>
            </ul>
            
            <p>In the meantime, check out our services:</p>
            <p><a href="https://wearewacky.com/services" style="color: #2563eb;">wearewacky.com/services</a></p>
            
            <p style="margin-top: 30px;">
              Cheers,<br/>
              The Wacky Works Team 🤖
            </p>
            
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;" />
            <p style="font-size: 12px; color: #666;">
              Wacky Works Digital<br/>
              London, UK<br/>
              <a href="https://wearewacky.com" style="color: #666;">wearewacky.com</a>
            </p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
    }

    // Also notify yourself about the new subscriber
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Wacky Works Digital <hello@wearewacky.com>",
        to: "hello@wearewacky.com",
        subject: `🎉 New subscriber: ${email}`,
        html: `
          <p>New email signup!</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Source:</strong> ${source || "Unknown"}</p>
          <p><strong>Time:</strong> ${new Date().toISOString()}</p>
        `,
      }),
    });

    return NextResponse.json({ 
      success: true, 
      message: "Successfully subscribed!" 
    });

  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}

