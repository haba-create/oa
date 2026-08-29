import TextileSlideshow from "../../TextileSlideshow";
import Image from "next/image";
import ProjectPage from "../../../components/case-studies/ProjectPage";
import AccessGate from "../../../components/work/AccessGate";
import { hasWorkAccess } from "../../../lib/work-access";
import { projects } from "../../../content/projects";

export default async function AfiaPage({ searchParams }: { searchParams: Promise<{ access?: string }> }) {
  if (!(await hasWorkAccess())) {
    return <AccessGate from="/work/afia" denied={(await searchParams).access === "denied"} />;
  }
  const research = <>
        <div className="afia-research-intro">
          <p className="caps">THE RESEARCH FRAME</p>
          <p>The starting point was not a moodboard, but an archive. Fourteen textile traditions were studied across West, East, Central, North and Southern Africa, including Kente, Adinkra, Shweshwe, Bògòlanfini, Aso-Oke, Kanga, Kuba cloth and bark cloth. Each was examined through the same research frame so cultural context and production knowledge could lead the design process.</p>
        </div>
        <div className="research-summary">
          <div><strong>14</strong><span className="caps">TEXTILE TRADITIONS<br />UNDER STUDY</span></div>
          <ol>
            <li><span>01</span>CULTURAL MEANING</li><li><span>02</span>MAKING &amp; TECHNIQUE</li><li><span>03</span>SYMBOLISM &amp; STATUS</li><li><span>04</span>CONTEMPORARY USE</li>
          </ol>
        </div>
      </>;
  const products = <>
        <section className="afia-findings" aria-labelledby="research-findings">
          <div className="afia-findings__heading">
            <p className="caps">RESEARCH FINDINGS</p>
            <h2 className="head" id="research-findings">FROM ARCHIVE<br />TO SYSTEM.</h2>
          </div>
          <div className="afia-findings__list">
            <article><span className="caps">01 / CULTURAL CONTEXT</span><p>Textiles do not operate as anonymous prints. Their meaning can sit in the fibre, the method of making, the occasion on which they are worn and the communities who hold that knowledge. The research therefore records origin and ownership alongside visual characteristics.</p></article>
            <article><span className="caps">02 / DESIGN COHESION</span><p>Four through-lines allow distinct traditions to retain their character while still belonging to one brand: a restrained palette, tactile gold or brass hardware, silhouettes that give the textile room to speak and merchandising organised by colour rather than by continent.</p></article>
            <article><span className="caps">03 / RESPONSIBLE PRACTICE</span><p>The working principle is relationship rather than rhetoric: acknowledge provenance, build direct and lasting producer partnerships, agree fair compensation in writing and avoid reproducing culturally significant cloth without the participation of its community.</p></article>
          </div>
        </section>
        <div className="afia-product-intro">
          <p className="caps">FROM RESEARCH TO PRODUCT</p>
          <p>These early swim studies test how textile-led design might translate into contemporary silhouettes without flattening the source material. They are propositions, not finished products: a way to explore proportion, placement, support and the balance between pattern and form.</p>
        </div>
        <div className="afia-products project-products">
          <figure><Image src="/work/afia-bikini-01.jpg" width={1069} height={1600} sizes="(max-width: 760px) 86vw, 32vw" alt="Gold patterned bandeau bikini concept for AFIA" unoptimized /></figure>
          <figure><Image src="/work/afia-bikini-02.jpg" width={1132} height={1600} sizes="(max-width: 760px) 86vw, 32vw" alt="Navy patterned cut-out swimsuit concept for AFIA" unoptimized /></figure>
          <figure><Image src="/work/afia-bikini-03.jpg" width={1066} height={1600} sizes="(max-width: 760px) 86vw, 32vw" alt="Orange patterned triangle bikini concept for AFIA" unoptimized /></figure>
        </div>
      </>;
  return <ProjectPage project={projects.afia} beforeMedia={research} media={<TextileSlideshow />} afterDetails={products} />;
}
