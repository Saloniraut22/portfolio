import { profile } from "../data/projects";

export default function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        padding: "10rem 5%",
        background: "#0a0a0a",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2rem, 5vw, 4rem)",
            color: "#fff",
            marginBottom: "3rem",
            lineHeight: 1.3,
            maxWidth: 800,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Let&apos;s create something extraordinary together
        </h2>

        <a
          href={`mailto:${profile.email}`}
          style={{
            display: "inline-block",
            padding: "1.5rem 4rem",
            background: "#FBA9A6",
            color: "#0a0a0a",
            textDecoration: "none",
            borderRadius: "50px",
            fontSize: "1.2rem",
            fontWeight: 600,
            marginBottom: "4rem",
            transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#ff8b86";
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 20px 60px rgba(251,169,166,0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#FBA9A6";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Get in Touch
        </a>

        <div style={{ marginBottom: "3rem" }}>
          <p style={{ color: "#999", marginBottom: "0.5rem", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "1px" }}>
            Available For Work
          </p>
          <a
            href={`mailto:${profile.email}`}
            style={{ color: "#FBA9A6", textDecoration: "none", fontSize: "1.1rem" }}
          >
            {profile.email}
          </a>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            style={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#999",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              fontSize: "1.2rem",
              transition: "all 0.4s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#FBA9A6";
              e.currentTarget.style.color = "#FBA9A6";
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              e.currentTarget.style.color = "#999";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            ✉
          </a>
          <a
            href={profile.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#999",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              fontSize: "1.2rem",
              transition: "all 0.4s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#FBA9A6";
              e.currentTarget.style.color = "#FBA9A6";
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              e.currentTarget.style.color = "#999";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            in
          </a>
        </div>
      </div>
    </section>
  );
}
