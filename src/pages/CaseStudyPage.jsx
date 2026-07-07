import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { getProjectBySlug } from "../data/projects";

export default function CaseStudyPage() {
  const { projectSlug } = useParams();
  const project = getProjectBySlug(projectSlug);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Saloni Raut`;
      return;
    }

    document.title = "Case Study Not Found | Saloni Raut";
  }, [project]);

  if (!project) {
    return (
      <>
        <SiteHeader />
        <main className="section-shell section-space min-h-[70vh]">
          <h1 className="font-heading text-4xl text-white md:text-5xl">Project not found</h1>
          <p className="mt-4 text-text-muted">The case study URL does not match any project yet.</p>
          <Link to="/" className="accent-button mt-6 inline-flex">
            Back to portfolio
          </Link>
        </main>
        <SiteFooter />
      </>
    );
  }

  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="section-shell section-space">
          <Link to="/" className="mb-7 inline-flex items-center text-sm text-accent hover:text-accent-hover">
            <FiArrowLeft className="mr-2" /> Back to all work
          </Link>

          <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.12em] text-accent">{project.category}</p>
              <h1 className="mt-3 font-heading text-4xl text-white md:text-6xl">{project.title}</h1>
              <p className="mt-4 text-lg text-text-muted md:text-xl">{project.subtitle}</p>

              <div className="mt-6 grid gap-3 text-sm text-text-muted sm:grid-cols-2">
                {project.duration ? (
                  <p>
                    <span className="text-accent">Duration:</span> {project.duration}
                  </p>
                ) : null}
                {project.team ? (
                  <p>
                    <span className="text-accent">Team:</span> {project.team}
                  </p>
                ) : null}
                {project.tools?.length ? (
                  <p className="sm:col-span-2">
                    <span className="text-accent">Tools:</span> {project.tools.join(", ")}
                  </p>
                ) : null}
                {project.role?.length ? (
                  <p className="sm:col-span-2">
                    <span className="text-accent">Role:</span> {project.role.join(", ")}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="card-frame overflow-hidden">
              <img
                src={project.coverImage}
                alt={`${project.title} hero`}
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {project.sections?.length ? (
          <section className="section-shell pb-10">
            <div className="grid gap-4">
              {project.sections.map((section) => (
                <article key={section.heading} className="card-frame p-5 md:p-7">
                  <h2 className="font-heading text-3xl text-white md:text-4xl">{section.heading}</h2>
                  {section.body ? <p className="mt-4 text-base leading-relaxed text-text-muted md:text-lg">{section.body}</p> : null}
                  {section.items?.length ? (
                    <ul className="mt-4 space-y-2 pl-5 text-base leading-relaxed text-text-muted md:text-lg">
                      {section.items.map((item) => (
                        <li key={item} className="list-disc">
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {project.metrics?.length ? (
          <section className="section-shell pb-10">
            <div className="card-frame p-5 md:p-7">
              <h2 className="font-heading text-3xl text-white md:text-4xl">Research Highlights</h2>
              <ul className="mt-4 grid gap-3 text-base text-text-muted md:text-lg">
                {project.metrics.map((metric) => (
                  <li key={metric} className="rounded-xl border border-white/8 bg-bg/55 px-4 py-3">
                    {metric}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        {project.seamlessSlices?.length ? (
          <section className="pb-14">
            <div className="section-shell mb-4">
              <h2 className="font-heading text-3xl text-white md:text-4xl">Full Case Study</h2>
              <p className="mt-2 text-text-muted">Presented as a seamless visual narrative from discovery to prototype.</p>
            </div>
            <div aria-label={`${project.title} case study slices`} className="mx-auto w-full max-w-5xl">
              {project.seamlessSlices.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`${project.title} case study section ${index + 1}`}
                  className="block w-full"
                  loading={index < 2 ? "eager" : "lazy"}
                />
              ))}
            </div>
          </section>
        ) : null}

        {project.gallery?.length ? (
          <section className="section-shell section-space">
            <h2 className="font-heading text-3xl text-white md:text-4xl">Visual Walkthrough</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {project.gallery.map((image, index) => (
                <figure key={image} className="card-frame overflow-hidden">
                  <img
                    src={image}
                    alt={`${project.title} design frame ${index + 1}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>
          </section>
        ) : null}
      </main>
      <SiteFooter />
    </>
  );
}
