const services = [
  { title: "Talent Sourcing & Management", description: "Finding the right creators and brand partners, then running the relationship end to end: briefing, contracting, content approvals and performance feedback that keep partnerships delivering past the first post." },
  { title: "Paid Social", description: "Planning, building and optimising full-funnel social campaigns. Creative testing, budget pacing and reporting that ties spend to revenue rather than vanity metrics." },
  { title: "Paid Search", description: "Building and managing search campaigns around real purchase intent. Clean account structures, sharp keyword strategy and bidding that protects profitability." },
  { title: "SEO / GEO", description: "Visibility where people actually look: search engines and AI answers. I audit how a brand shows up in both, then close the gaps keeping it invisible." },
  { title: "Research & Development", description: "Designing and developing websites, AI tools and internal products, from concept to live." },
  { title: "AI Augmentation", description: "Integrating AI across business operations: custom chatbots, autonomous agents and automated reporting that reduce manual work and increase capacity." },
];

export default function WhatIDo() {
  return (
    <section className="work" id="services">
      <h2 className="head">WHAT I DO.</h2>
      <div className="work__grid">
        {services.map((service, index) => (
          <article className="card" id={`service-0${index + 1}`} key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
