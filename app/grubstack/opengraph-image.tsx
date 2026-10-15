import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "GrubStack case study by William Hunt";

export default async function OpengraphImage() {
  const preview = await readFile(
    join(process.cwd(), "public/images/grubstack-og.png"),
  );
  const previewSrc = `data:image/png;base64,${preview.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#f7f9fc",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "60px",
              height: "60px",
              borderRadius: "14px",
              background: "#16213e",
              color: "#ffffff",
              fontSize: "30px",
              fontWeight: 800,
            }}
          >
            W
          </div>
          <div style={{ fontSize: "30px", fontWeight: 700, color: "#16213e" }}>
            William Hunt
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
          <div style={{ display: "flex", flexDirection: "column", width: "420px" }}>
            <div
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#6b7280",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              Case study
            </div>
            <div
              style={{
                fontSize: "72px",
                fontWeight: 800,
                color: "#16213e",
                lineHeight: 1.05,
                marginTop: "12px",
              }}
            >
              GrubStack
            </div>
            <div
              style={{
                fontSize: "28px",
                fontWeight: 600,
                color: "#1d4ed8",
                lineHeight: 1.3,
                marginTop: "20px",
              }}
            >
              Dedicated-tenant SaaS ordering for small restaurants
            </div>
          </div>

          <img src={previewSrc} width={620} height={263} alt="" />
        </div>

        <div style={{ display: "flex", fontSize: "22px", color: "#4b5563" }}>
          Next.js &middot; React &middot; Python &middot; Kubernetes &middot; Stripe &amp; Square
        </div>
      </div>
    ),
    { ...size },
  );
}
