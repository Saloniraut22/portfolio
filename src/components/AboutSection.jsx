import { motion } from "framer-motion";
import { profile } from "../data/projects";

const galleryPhotos = [
  { src: "/image/About/photo1.jpeg", alt: "San Francisco Streets" },
  { src: "/image/About/photo2.jpeg", alt: "Ocean View" },
  { src: "/image/About/photo3.jpeg", alt: "Flower Market" },
  { src: "/image/About/photo4.jpeg", alt: "Mountain Views" },
  { src: "/image/About/photo5.jpeg", alt: "Conference" },
  { src: "/image/About/photo6.jpeg", alt: "Culinary Adventures" },
  { src: "/image/About/photo7.jpeg", alt: "Golden Gate" },
  { src: "/image/About/photo8.jpeg", alt: "Nature Encounters" },
  { src: "/image/About/photo9.jpeg", alt: "NYC Skyline" },
  { src: "/image/About/photo10.jpeg", alt: "Hiking Adventures" },
];

const cards = [
  {
    title: "My Approach",
    text: "I collaborate with businesses of all sizes worldwide, using the latest technologies and design methodologies, including AI-driven and agentic experiences. My work is rooted in exploration, whether it's uncovering insights through research or experimenting with emerging design approaches.",
  },
  {
    title: "Design Philosophy",
    text: "I'm dedicated to bridging the gap between aesthetics and usability, especially as AI reshapes how people interact with products. My designs focus on creating beautiful, highly functional experiences that feel human even when powered by intelligent systems.",
  },
  {
    title: "Beyond Design",
    text: "Beyond design, I find inspiration in traveling, exploring new places, and capturing moments that tell a story. I'm also passionate about fashion and styling, seeing them as another form of self-expression and creativity.",
  },
];

export default function AboutSection() {
  // Duplicate photos so the marquee loops seamlessly
  const track = [...galleryPhotos, ...galleryPhotos];

  return (
    <section
      id="about"
      style={{ padding: "8rem 5%", background: "#0a0a0a" }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "6rem" }}>
          {/* Name + photo */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "center",
            }}
            className="about-main-grid"
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", padding: "2rem 0" }}>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    color: "#fff",
                    marginBottom: "0.5rem",
                    lineHeight: 1.2,
                  }}
                >
                  About{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #FBA9A6, #ff6b9d, #ffa502)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Saloni
                  </span>
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#999",
                    fontStyle: "italic",
                    letterSpacing: "1px",
                    opacity: 0.7,
                    marginTop: "0.5rem",
                  }}
                >
                  Sa-lo-nee
                </p>
              </div>
              <p
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  lineHeight: 1.7,
                  color: "#fff",
                  fontWeight: 300,
                  letterSpacing: "0.3px",
                }}
              >
                A Product Designer driven by curiosity and creativity, with hands-on experience in AI Agentic UX. I love crafting intuitive, user-centered experiences that blend function with emotion.
              </p>
            </div>

            <div>
              <img
                src="/image/About/SaloniRaut.jpg"
                alt={`${profile.name} portrait`}
                loading="lazy"
                style={{
                  width: "100%",
                  borderRadius: 12,
                  display: "block",
                  transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 20px 60px rgba(251,169,166,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>
          </div>

          {/* Info cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {cards.map((card, i) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  background: "#111",
                  padding: "2.5rem",
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.05)",
                  transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#FBA9A6";
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 10px 40px rgba(251,169,166,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <h4
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#FBA9A6",
                    marginBottom: "1rem",
                  }}
                >
                  {card.title}
                </h4>
                <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#e5e5e5" }}>
                  {card.text}
                </p>
              </motion.article>
            ))}
          </div>

          {/* Creative expressions heading */}
          <div style={{ textAlign: "center", padding: "2rem 0 4rem" }}>
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "#fff",
                marginBottom: "1.5rem",
                lineHeight: 1.2,
              }}
            >
              Creative Expressions
            </h3>
            <p
              style={{
                fontSize: "clamp(1.3rem, 2.5vw, 1.6rem)",
                lineHeight: 1.8,
                color: "#e5e5e5",
                fontWeight: 300,
                maxWidth: 800,
                margin: "0 auto",
              }}
            >
              Whether through design, photography, or personal style, I strive to bring imagination and intention into everything I do.
            </p>
          </div>

          {/* Infinite photo gallery */}
          <div
            style={{
              width: "100%",
              overflow: "hidden",
              padding: "2rem 0",
              position: "relative",
              marginTop: "2rem",
            }}
            className="photo-gallery"
          >
            <div className="gallery-track">
              {track.map((photo, i) => (
                <div key={`${photo.src}-${i}`} className="gallery-item">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
