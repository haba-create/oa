export type ProjectDetail = {
  heading: string;
  body: string;
};

export type Project = {
  slug: string;
  number: string;
  group: "Talent Management & Sourcing" | "Research & Development";
  status: string;
  title: string;
  cover?: { src: string; alt: string; width: number; height: number };
  disciplines: string;
  statementLabel: string;
  statement: string;
  details: ProjectDetail[];
  demonstrates: string;
};
