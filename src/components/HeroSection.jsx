import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useRef, useState } from "react";
import { profile } from "../data/projects";

const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

const hoverImages = [
  asset("/image/hover/photo1.png"),
  asset("/image/hover/photo2.png"),
  asset("/image/hover/photo3.png"),
  asset("/image/hover/photo4.png"),
  asset("/image/hover/photo5.png"),
  asset("/image/hover/photo6.png"),
  asset("/image/hover/photo7.png"),
  asset("/image/hover/photo8.png"),
];

const rotations = [-6, 4, -3, 7, -5, 3];

function RevealWord({ word, delay }) {
  return (
    <span
      style={{
        display: "inline-block",
        overflow: "hidden",
        verticalAlign: "bottom",
        paddingTop: "0.12em",
        marginTop: "-0.12em",
      }}
    >
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
        style={{ display: "inline-block" }}
      >
        {word}
      </motion.span>
    </span>
  );
}

export default function HeroSection() {
  const [floatingImgs, setFloatingImgs] = useState([]);
  const imgIndexRef = useRef(0);
  const lastTriggerRef = useRef(0);
  const sectionRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;

    const now = Date.now();
    if (now - lastTriggerRef.current < 240) return;
    lastTriggerRef.current = now;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const src = hoverImages[imgIndexRef.current % hoverImages.length];
    const rot = rotations[imgIndexRef.current % rotations.length];
    const id = imgIndexRef.current;
    imgIndexRef.current += 1;

    // Add new image
    setFloatingImgs((prev) => [...prev, { x, y, src, rot, id }]);

    // Remove it after 1.4s so they naturally overlap and fade
    setTimeout(() => {
      setFloatingImgs((prev) => prev.filter((img) => img.id !== id));
    }, 950);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setFloatingImgs([]);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        padding: "8rem 5% 6rem",
        background: "#0a0a0a",
        overflow: "hidden",
        cursor: "none",
      }}
    >
      {/* Subtle grid texture */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Ambient glow */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
        style={{
          position: "absolute",
          width: "70vw",
          height: "70vw",
          maxWidth: 800,
          maxHeight: 800,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(251,169,166,0.22) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ---- Main content ---- */}
      <div style={{ textAlign: "center", zIndex: 2, position: "relative", width: "100%" }}>


        {/* Big name — word-by-word reveal */}
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(5rem, 15vw, 13rem)",
            fontWeight: "bold",
            lineHeight: 0.88,
            letterSpacing: "-3px",
            color: "#fff",
            marginBottom: "3rem",
            userSelect: "none",
          }}
        >
          <div style={{ marginBottom: "0.05em" }}>
            <RevealWord word="SALONI" delay={0.2} />
          </div>
          <div>
            <RevealWord word="RAUT" delay={0.45} />
          </div>
        </h1>

        {/* Subtitle */}
        <div style={{ overflow: "hidden" }}>
          <motion.p
            initial={{ y: "120%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              color: "#999",
              letterSpacing: "0.08em",
              fontFamily: "var(--font-sans)",
              marginBottom: "2.5rem",
            }}
          >
            Product &amp; UX Designer
          </motion.p>
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="hero-cta-row"
          style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
        >
          <a
            href="#works"
            className="hero-cta-button hero-cta-primary"
            style={{
              padding: "0.9rem 2.2rem",
              background: "#FBA9A6",
              color: "#0a0a0a",
              borderRadius: "50px",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: "0.9rem",
              letterSpacing: "0.04em",
              textDecoration: "none",
              transition: "all 0.35s",
              touchAction: "manipulation",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#ff8b86";
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 12px 30px rgba(251,169,166,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#FBA9A6";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            View My Work
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="hero-cta-button hero-cta-secondary"
            style={{
              padding: "0.9rem 2.2rem",
              border: "1px solid rgba(251,169,166,0.5)",
              color: "#FBA9A6",
              borderRadius: "50px",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: "0.9rem",
              letterSpacing: "0.04em",
              textDecoration: "none",
              transition: "all 0.35s",
              touchAction: "manipulation",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#FBA9A6";
              e.currentTarget.style.background = "rgba(251,169,166,0.08)";
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(251,169,166,0.5)";
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Resume ↗
          </a>
        </motion.div>
      </div>

      {/* Overlapping floating images */}
      <AnimatePresence>
        {floatingImgs.map((img) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, scale: 0.82, rotate: img.rot - 4, y: 24 }}
            animate={{ opacity: 1, scale: 1, rotate: img.rot, y: -40 }}
            exit={{ opacity: 0, y: -80, scale: 0.92 }}
            transition={{
              opacity: { duration: 0.28, ease: "easeOut" },
              scale: { duration: 0.28, ease: [0.16, 1, 0.3, 1] },
              rotate: { duration: 0.28, ease: [0.16, 1, 0.3, 1] },
              y: { duration: 1.4, ease: "easeOut" },
            }}
            aria-hidden
            style={{
              position: "absolute",
              left: img.x,
              top: img.y,
              transform: "translate(-50%, -60%)",
              width: "clamp(160px, 18vw, 240px)",
              aspectRatio: "4/3",
              borderRadius: 10,
              overflow: "hidden",
              pointerEvents: "none",
              zIndex: 10 + img.id,
              boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
            }}
          >
            <img
              src={img.src}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </motion.div>
        ))}
      </AnimatePresence>

    </section>
  );
}
