"use client";

/* Replaces the root layout when it fails, so it carries its own html/body and inline styles. */
export default function GlobalError({ unstable_retry }: { error: Error & { digest?: string }; unstable_retry: () => void }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "3rem 1.5rem",
          background: "#ffffff",
          color: "#353335",
          fontFamily: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "26rem" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#826400", margin: "0 0 1.25rem" }}>
            Error 500
          </p>
          <h1 style={{ fontFamily: "Georgia, serif", fontWeight: 500, fontSize: "2rem", margin: "0 0 0.6rem" }}>
            Something broke on our end.
          </h1>
          <p style={{ color: "#6b6b6b", lineHeight: 1.6, margin: "0 0 2rem" }}>
            An unexpected error stopped the site from loading. Please try again.
          </p>
          <button
            onClick={() => unstable_retry()}
            style={{ background: "#e8b923", color: "#353335", border: 0, borderRadius: 6, padding: "0.75rem 1.25rem", fontWeight: 600, fontSize: "0.875rem", cursor: "pointer" }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
