import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#f7f9fc",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "72px",
              height: "72px",
              borderRadius: "16px",
              background: "#16213e",
              color: "#ffffff",
              fontSize: "36px",
              fontWeight: 800,
            }}
          >
            W
          </div>
          <div
            style={{
              fontSize: "36px",
              fontWeight: 700,
              color: "#16213e",
            }}
          >
            William Hunt
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "64px",
            fontWeight: 800,
            color: "#16213e",
            lineHeight: 1.1,
            maxWidth: "900px",
          }}
        >
          Full-Stack Developer
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "30px",
            fontWeight: 600,
            color: "#1d4ed8",
            marginTop: "24px",
          }}
        >
          React &middot; Python &middot; Docker &middot; Kubernetes
        </div>
      </div>
    ),
    { ...size },
  );
}
