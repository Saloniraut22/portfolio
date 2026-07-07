import { motion } from "framer-motion";

export default function WorkCard({ project, onClick, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick?.()}
      style={{ cursor: "pointer" }}
      className="work-item"
    >
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 12,
          aspectRatio: "16/10",
          background: "#0a0a0a",
        }}
      >
        <img
          src={project.thumbnail}
          alt={`${project.title} project cover`}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
          }}
          className="work-img"
        />
        <div className="work-overlay">
          <span
            style={{
              color: "#fff",
              fontSize: "1.2rem",
              padding: "1rem 2rem",
              border: "1px solid #FBA9A6",
              borderRadius: "50px",
            }}
            className="view-project-label"
          >
            View Project
          </span>
        </div>
      </div>

      <div style={{ padding: "1.5rem 0" }}>
        <h3 style={{ fontSize: "1.5rem", color: "#fff", marginBottom: "0.5rem", fontWeight: 600 }}>
          {project.title}
        </h3>
        <p style={{ fontSize: "0.9rem", color: "#999", textTransform: "uppercase", letterSpacing: "1px" }}>
          {project.category}
        </p>
      </div>
    </motion.article>
  );
}
