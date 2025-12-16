import { NextResponse } from "next/server";

const INDEXNOW_KEY = "279a5d8de0cf47d5b7125496b5e3fc16";
const SITE_URL = "https://wearewacky.com";

// This API route can be called to notify Bing/Yandex of new/updated pages
// Usage: POST /api/indexnow with body { "urls": ["/pricing", "/faq"] }
export async function POST(request: Request) {
  try {
    const { urls } = await request.json();
    
    if (!urls || !Array.isArray(urls)) {
      return NextResponse.json({ error: "urls array required" }, { status: 400 });
    }

    const fullUrls = urls.map((url: string) => 
      url.startsWith("http") ? url : `${SITE_URL}${url}`
    );

    // Submit to IndexNow (Bing, Yandex, etc.)
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        host: "wearewacky.com",
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: fullUrls,
      }),
    });

    if (response.ok || response.status === 202) {
      return NextResponse.json({ 
        success: true, 
        message: `Submitted ${fullUrls.length} URLs to IndexNow`,
        urls: fullUrls 
      });
    } else {
      return NextResponse.json({ 
        error: "IndexNow submission failed", 
        status: response.status 
      }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}

// GET endpoint to check the key
export async function GET() {
  return NextResponse.json({ 
    key: INDEXNOW_KEY,
    keyUrl: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    usage: "POST /api/indexnow with body { urls: ['/page1', '/page2'] }"
  });
}

