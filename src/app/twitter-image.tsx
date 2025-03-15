import { ImageResponse }  from "next/og";



export default function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          backgroundColor: "#f0f4f8",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          fontFamily:
            'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
        }}
      >
        <h1 style={{ fontSize: 60, color: "#007BFF", marginBottom: 20 }}>
          How to Behave with Others
        </h1>
        <p style={{ fontSize: 30, color: "#333" }}>
          Bible-Based Guidance for Every Situation
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
