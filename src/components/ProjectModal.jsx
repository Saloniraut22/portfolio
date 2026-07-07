import { useEffect } from "react";

export default function ProjectModal({ project, onClose }) {
  // Close on Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const images = project.seamlessSlices ?? project.gallery ?? [];

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2000,
        background: "rgba(0,0,0,0.95)",
        backdropFilter: "blur(10px)",
        overflowY: "auto",
        animation: "fadeIn 0.3s ease",
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close project"
        style={{
          position: "fixed",
          top: "2rem",
          right: "2rem",
          width: 50,
          height: 50,
          background: "#fff",
          color: "#0a0a0a",
          border: "none",
          borderRadius: "50%",
          fontSize: "2rem",
          cursor: "pointer",
          zIndex: 2001,
          lineHeight: 1,
          transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#FBA9A6";
          e.currentTarget.style.transform = "rotate(90deg)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "#fff";
          e.currentTarget.style.transform = "rotate(0deg)";
        }}
      >
        &times;
      </button>

      <div
        style={{
          position: "relative",
          maxWidth: 1400,
          margin: "4rem auto",
          padding: "2rem",
        }}
      >
        {/* Images — seamless stack or gallery grid */}
        {project.seamlessSlices ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 0,
              maxWidth: 900,
              margin: "0 auto",
            }}
          >
            {images.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`${project.title} case study — section ${i + 1}`}
                loading={i < 2 ? "eager" : "lazy"}
                style={{
                  width: "100%",
                  display: "block",
                  margin: 0,
                  padding: 0,
                  border: "none",
                  borderRadius: 0,
                }}
              />
            ))}
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem,4vw,3rem)",
                color: "#fff",
                marginBottom: "1rem",
                textAlign: "center",
              }}
            >
              {project.title}
            </h2>
            {images.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`${project.title} — frame ${i + 1}`}
                loading={i < 1 ? "eager" : "lazy"}
                style={{
                  width: "100%",
                  borderRadius: 12,
                  animation: "fadeInUp 0.6s ease forwards",
                  display: "block",
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
