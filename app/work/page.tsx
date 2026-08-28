import SiteHeader from "../../components/site/SiteHeader";
import { projectList } from "../../content/projects";
import Image from "next/image";
import type { Project } from "../../types/project";

function ProjectRow({ project }: { project: Project }) {
  return (
    <a className="case-study-row" href={`/work/${project.slug}`}>
      <span className="case-study-row__number caps">{project.number}</span>
      <div className="case-study-row__copy">
        <span className="caps">{project.status}</span>
        <strong>{project.title}</strong>
        <p>{project.statement}</p>
        <span className="case-study-row__view caps">VIEW CASE STUDY →</span>
      </div>
      <div className={`case-study-row__media${project.cover ? "" : " case-study-row__media--pending"}`}>
        {project.cover ? <Image src={project.cover.src} alt={project.cover.alt} width={project.cover.width} height={project.cover.height} sizes="(max-width: 760px) 100vw, 38vw" unoptimized /> : <span className="caps">IMAGE SERIES<br />COMING SOON</span>}
      </div>
    </a>
  );
}

export default function CaseStudiesPage() {
  const talentProjects = projectList.filter((project) => project.group === "Talent Management & Sourcing");
  const researchProjects = projectList.filter((project) => project.group === "Research & Development");

  return (
    <>
      <SiteHeader context="CASE STUDIES" project hideAction />
      <main className="case-studies-page">
        <section className="case-studies-hero">
          <p className="caps">SELECTED WORK</p>
          <h1 className="head">CASE STUDIES.</h1>
          <p className="case-studies-hero__lead">Selected work across creator strategy, production, cultural research and product development. Each study shows how the work was framed, led and translated into value.</p>
        </section>
        <hr className="divider" />

        <section className="case-study-group">
          <div className="case-study-group__heading">
            <span className="caps">01</span>
            <h2 className="head">TALENT MANAGEMENT<br />&amp; SOURCING</h2>
          </div>
          <div className="case-study-list">{talentProjects.map((project) => <ProjectRow project={project} key={project.slug} />)}</div>
        </section>

        <hr className="divider" />

        <section className="case-study-group">
          <div className="case-study-group__heading">
            <span className="caps">02</span>
            <h2 className="head">RESEARCH &amp;<br />DEVELOPMENT</h2>
          </div>
          <div className="case-study-list">{researchProjects.map((project) => <ProjectRow project={project} key={project.slug} />)}</div>
        </section>

        <p className="case-references caps">REFERENCES FROM ACROSS LONDON AND NEW YORK ARE AVAILABLE ON REQUEST.</p>
      </main>
    </>
  );
}
