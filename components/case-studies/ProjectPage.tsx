import type { ReactNode } from "react";
import type { Project } from "../../types/project";
import SiteHeader from "../site/SiteHeader";

type ProjectPageProps = {
  project: Project;
  media: ReactNode;
  beforeMedia?: ReactNode;
  afterDetails?: ReactNode;
};

export default function ProjectPage({ project, media, beforeMedia, afterDetails }: ProjectPageProps) {
  return (
    <>
      <SiteHeader context={`SELECTED WORK / ${project.number}`} project />
      <main className="project-page">
        <section className="project-page__hero">
          <span className="project-page__number" aria-hidden="true">{project.number}</span>
          <p className="caps">{project.status}</p>
          <h1 className="head">{project.title}</h1>
          <p className="fineprint">{project.disciplines}</p>
        </section>
        <hr className="divider" />
        <section className="project-page__statement">
          <p className="caps">{project.statementLabel}</p>
          <p className="project-page__lead">{project.statement}</p>
        </section>
        {beforeMedia}
        {media}
        <section className="project-page__details">
          {project.details.map((detail) => <div key={detail.heading}><p className="caps">{detail.heading}</p><p className="project-copy">{detail.body}</p></div>)}
        </section>
        <aside className="project-page__demonstrates">
          <p className="caps">WHAT THIS WORK DEMONSTRATES</p>
          <p>{project.demonstrates}</p>
        </aside>
        {afterDetails}
        <div className="project-page__next">
          <a className="back-link caps" href="/work">← ALL CASE STUDIES</a>
        </div>
      </main>
    </>
  );
}
