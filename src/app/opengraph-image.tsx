import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Wacky Works Digital — AI Agents, Workflow Automation & Web Development agency based in London, UK.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f0eadd",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Grid paper background pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(139, 94, 60, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 94, 60, 0.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            display: "flex",
          }}
        />

        {/* Top badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              background: "#000000",
              color: "#f0eadd",
              fontSize: "15px",
              fontWeight: 800,
              padding: "8px 20px",
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              border: "3px solid #000",
              transform: "rotate(-1deg)",
            }}
          >
            Digital Agency
          </div>
          <div
            style={{
              background: "#16a34a",
              color: "#fff",
              fontSize: "15px",
              fontWeight: 700,
              padding: "8px 16px",
              border: "3px solid #000",
              transform: "rotate(1deg)",
            }}
          >
            London, UK
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "76px",
            fontWeight: 900,
            color: "#000000",
            lineHeight: 1.05,
            marginBottom: "20px",
            maxWidth: "900px",
            letterSpacing: "-0.02em",
          }}
        >
          Wacky Works Digital
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "28px",
            fontWeight: 500,
            color: "#555250",
            lineHeight: 1.4,
            marginBottom: "36px",
            maxWidth: "800px",
          }}
        >
          AI Agents · Workflow Automation · Web Development
        </div>

        {/* Service pills */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {[
            { label: "AI Agents", bg: "#d97706" },
            { label: "Hey Jess", bg: "#8A9A86" },
            { label: "Automation", bg: "#2563eb" },
            { label: "Websites", bg: "#dc2626" },
            { label: "Branding", bg: "#f9a8d4", color: "#000" },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                background: s.bg,
                border: "3px solid #000",
                padding: "10px 24px",
                fontSize: "18px",
                fontWeight: 700,
                color: s.color || "#fff",
                boxShadow: "3px 3px 0px 0px #000000",
              }}
            >
              {s.label}
            </div>
          ))}
        </div>

        {/* URL bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "80px",
            fontSize: "20px",
            color: "#8b5e3c",
            fontWeight: 700,
            letterSpacing: "0.02em",
          }}
        >
          wearewacky.com
        </div>

        {/* Decorative sticker bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: "36px",
            left: "80px",
            fontSize: "14px",
            color: "#555250",
            fontWeight: 500,
            background: "#fcd34d",
            padding: "6px 16px",
            border: "2px solid #000",
            transform: "rotate(-2deg)",
            boxShadow: "2px 2px 0px 0px #000000",
          }}
        >
          We&apos;re not for everyone. And that&apos;s the point.
        </div>
      </div>
    ),
    { ...size }
  );
}
