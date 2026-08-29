import VideoSlideshow from "../../VideoSlideshow";
import ProjectPage from "../../../components/case-studies/ProjectPage";
import AccessGate from "../../../components/work/AccessGate";
import { hasWorkAccess } from "../../../lib/work-access";
import { projects } from "../../../content/projects";

export default async function CreatorCampaignPage({ searchParams }: { searchParams: Promise<{ access?: string }> }) {
  if (!(await hasWorkAccess())) {
    return <AccessGate from="/work/creator-campaign" denied={(await searchParams).access === "denied"} />;
  }
  return <ProjectPage project={projects.creatorCampaign} media={<VideoSlideshow />} />;
}
