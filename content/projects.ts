import type { Project } from "../types/project";

export const projects = {
  creatorCampaign: {
    slug: "creator-campaign",
    number: "01",
    group: "Talent Management & Sourcing",
    status: "FASHION / CREATOR PARTNERSHIPS",
    title: "CREATOR CAMPAIGN",
    cover: { src: "/work/campaign-stills.jpg", alt: "Selected frames from the fashion creator campaign", width: 1440, height: 530 },
    disciplines: "CREATOR STRATEGY / SOURCING / MANAGEMENT",
    statementLabel: "THE OPPORTUNITY",
    statement: "Build a creator-led content system that could feel native in-feed, carry a clear fashion point of view and work across both organic and paid distribution.",
    details: [
      { heading: "STRATEGIC DIRECTION", body: "The creative approach focused on wardrobe behaviour rather than product lists. Capsule dressing, quick changes, styling reveals and recognisable moments made the product useful, desirable and easy to understand in motion." },
      { heading: "TALENT & BRIEFING", body: "I shaped the creator strategy, selected talent against the creative and audience requirements, and translated the campaign idea into briefs with enough structure to protect the work and enough freedom for each creator to feel credible." },
      { heading: "CONTENT CONTROL", body: "I managed content review and approvals, protecting the core campaign idea while resolving practical issues around product focus, pacing, framing and edit structure." },
      { heading: "COMMERCIAL VALUE", body: "The result was a flexible bank of social-first assets built to serve more than one placement or moment. The system supported organic storytelling while giving paid teams multiple hooks, formats and creative routes to work with." },
    ],
    demonstrates: "Creator judgement, talent management and the ability to turn a campaign idea into a usable content system.",
  },
  haircareCampaign: {
    slug: "haircare-ugc-campaign",
    number: "02",
    group: "Talent Management & Sourcing",
    status: "UGC & SHOOT PRODUCTION / HAIRCARE",
    title: "PREMIUM HAIRCARE UGC CAMPAIGN",
    cover: { src: "/work/haircare-shoot-02.jpg", alt: "Behind the scenes of a premium haircare content shoot", width: 2200, height: 1466 },
    disciplines: "CREATOR CONTENT / SHOOT PRODUCTION / SOCIAL ASSETS",
    statementLabel: "THE OPPORTUNITY",
    statement: "Translate a premium haircare world into creator-led content that felt polished, useful and natural to watch, without losing the flexibility social channels demand.",
    details: [
      { heading: "CAMPAIGN DEVELOPMENT", body: "The campaign combined creator-led storytelling with a dedicated shoot. Familiar hair rituals gave the content relevance, while a controlled visual language maintained the quality expected of a premium brand." },
      { heading: "PRODUCTION", body: "I helped shape the UGC approach and supported shoot delivery from creative planning through asset creation, keeping social behaviour, product clarity and production requirements aligned." },
      { heading: "CONTENT STRUCTURE", body: "The work was planned as a versatile asset system rather than a single hero execution. Different moments, demonstrations and edits could be deployed across organic activity and wider campaign use." },
      { heading: "CREATIVE VALUE", body: "The approach brought creator credibility and premium production into the same system, allowing the brand to communicate expertise without making the content feel formal or remote." },
    ],
    demonstrates: "UGC strategy, shoot production and the ability to balance premium brand codes with platform-native storytelling.",
  },
  afia: {
    slug: "afia",
    number: "03",
    group: "Research & Development",
    status: "INDEPENDENT PROJECT / IN DEVELOPMENT",
    title: "AFIA",
    cover: { src: "/work/textiles/textile-22.jpg", alt: "Orange, purple, black and gold textile sample documented in the AFIA research archive", width: 1600, height: 1200 },
    disciplines: "FOUNDER / RESEARCH / BRAND & PRODUCT DEVELOPMENT",
    statementLabel: "THE CONCEPTION",
    statement: "AFIA began with a question rooted in my Ghanaian heritage: how can African textile knowledge shape a contemporary product and brand system from the inside out, rather than being applied as surface decoration?",
    details: [
      { heading: "NAME & FOUNDATION", body: "Afia is an Akan day name from Ghana, given to a girl born on Friday. The name connects the project to my heritage and gives it a clear point of origin. The work begins with cultural and material research, then asks what that knowledge should change about the brand." },
      { heading: "RESEARCH METHOD", body: "Fourteen textile traditions were examined through cultural meaning, making technique, symbolism, status and contemporary use. Applying the same research frame across the archive made comparison rigorous without treating distinct traditions as interchangeable." },
      { heading: "DESIGN & PRODUCT SYSTEM", body: "The findings now inform a coherent system across colour, hardware, silhouette, voice and merchandising. Early product studies test how that system can translate into swimwear, intimates and loungewear while allowing each textile tradition to retain its character." },
      { heading: "WHERE AFIA SITS NOW", body: "AFIA is in development. The current work defines sourcing principles, ethical commitments, brand voice and product direction, with direct, long-term producer relationships and fair compensation positioned as requirements for future production." },
    ],
    demonstrates: "Research depth, cultural judgement and the ability to translate complex source material into brand, sourcing and product decisions.",
  },
} satisfies Record<string, Project>;

export const projectList = Object.values(projects);
