import Image from "next/image";
import ProjectPage from "../../../components/case-studies/ProjectPage";
import AccessGate from "../../../components/work/AccessGate";
import { hasWorkAccess } from "../../../lib/work-access";
import { projects } from "../../../content/projects";

export default async function HaircareUgcCampaignPage({ searchParams }: { searchParams: Promise<{ access?: string }> }) {
  if (!(await hasWorkAccess())) {
    return <AccessGate from="/work/haircare-ugc-campaign" denied={(await searchParams).access === "denied"} />;
  }
  const shootGallery = (
    <section className="haircare-gallery" aria-labelledby="haircare-gallery-title">
      <div className="haircare-gallery__heading">
        <p className="caps" id="haircare-gallery-title">ON SET / SELECTED PRODUCTION NOTES</p>
        <p className="caps">03 PHOTOGRAPHS</p>
      </div>
      <figure className="haircare-gallery__hero">
        <Image src="/work/haircare-shoot-01.jpg" width={2200} height={1466} sizes="(max-width: 760px) 100vw, 1016px" alt="Photographer capturing a model against a warm red studio backdrop during the haircare shoot" unoptimized />
        <figcaption className="caps">01 / LIGHTING, TALENT AND FRAME</figcaption>
      </figure>
      <div className="haircare-gallery__pair">
        <figure>
          <Image src="/work/haircare-shoot-02.jpg" width={2200} height={1466} sizes="(max-width: 760px) 100vw, 50vw" alt="Production team reviewing a model's frame on set during the haircare campaign shoot" unoptimized />
          <figcaption className="caps">02 / LIVE REVIEW</figcaption>
        </figure>
        <figure>
          <Image src="/work/haircare-shoot-03.jpg" width={2200} height={1466} sizes="(max-width: 760px) 100vw, 50vw" alt="Wide behind-the-scenes view of the haircare shoot with model, camera crew and production team" unoptimized />
          <figcaption className="caps">03 / SHOOT PRODUCTION</figcaption>
        </figure>
      </div>
    </section>
  );

  return <ProjectPage project={projects.haircareCampaign} media={shootGallery} />;
}
