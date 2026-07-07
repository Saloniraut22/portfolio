import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectModal from "./ProjectModal";
import WorkCard from "./WorkCard";

export default function WorksGrid() {
  const [activeProject, setActiveProject] = useState(null);
  const navigate = useNavigate();

  function handleProjectClick(project) {
    if (project.openAsPage) {
      navigate(`/work/${project.slug}`);
    } else {
      setActiveProject(project);
    }
  }

  return (
    <>
      <section
        id="works"
        style={{
          padding: "8rem 5% 4rem",
          background: "#111111",
        }}
      >
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <h2
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "4rem",
              paddingBottom: "2rem",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem, 5vw, 4rem)",
                color: "#fff",
                letterSpacing: "-1px",
              }}
            >
              work.
            </span>
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
              gap: "3rem",
              marginTop: "4rem",
            }}
            className="works-grid"
          >
            {projects.map((project, i) => (
              <WorkCard
                key={project.slug}
                project={project}
                index={i}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  );
}
