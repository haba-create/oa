import WhatIDo from "../components/home/WhatIDo";
import SiteHeader from "../components/site/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="hero" id="top">
          <p className="caps">MARKETING, MEDIA AND THE SYSTEMS THAT RUN THEM.</p>
          <h1 className="head">I BUILD DIGITAL EXPERIENCES<br />AND GROW BRANDS.</h1>
          <p className="hero__fine fineprint">MY WORK SITS BETWEEN PRODUCT AND PERFORMANCE: WEBSITES, TOOLS, PAID MEDIA, AND EVERYTHING THAT CONNECTS THEM.</p>
        </section>

        <hr className="divider" />

        <section className="about" id="about">
          <h2 className="head">ABOUT ME</h2>
          <p className="about__strap caps">TECHNICAL DEPTH. COMMERCIAL INSTINCT. ONE JOINED-UP VIEW.</p>
          <div className="about__fine fineprint">
            <p>I grew up in New York and now work across New York and London. I started in software development and moved into marketing, where the product and the consumer finally met.</p>
            <p>That combination shapes how I lead: I understand what needs to be built, how it should reach people and what commercial success should look like.</p>
            <p>Today I work across campaign strategy, paid media, creator partnerships, production, research, development and AI-enabled operations. Different disciplines, one joined-up view of how brands earn attention and grow.</p>
          </div>
        </section>

        <hr className="divider" />

        <WhatIDo />

        <hr className="divider" />

        <section className="contact" id="contact">
          <h2 className="head">WHAT DOES YOUR BRAND<br />NEED NEXT?</h2>
          <p className="contact__fine fineprint">Have a product to build, a campaign to improve or an ambitious problem that sits somewhere between the two? Let’s talk.</p>
          <p className="references-note caps">REFERENCES FROM ACROSS LONDON AND NEW YORK ARE AVAILABLE ON REQUEST.</p>
          <div className="contact__links">
            <a href="mailto:obenewa@obenewa.co.uk">EMAIL ME</a>
            <a href="https://www.linkedin.com/in/obenewa" target="_blank" rel="noreferrer">LINKEDIN</a>
            <a href="https://www.instagram.com/madebyafia?igsh=ZHJwZXBja2w1b2I3&utm_source=qr" target="_blank" rel="noreferrer">INSTAGRAM</a>
          </div>
          <span className="contact__sign" aria-hidden="true">obenewa xx</span>
        </section>
      </main>

      <footer>
        <span>© 2026 OBENEWA ADU</span>
        <span>MARKETING / PAID MEDIA / DEVELOPMENT</span>
        <a href="#top">BACK TO TOP</a>
      </footer>
    </>
  );
}
