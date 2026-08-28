import VideoSlideshow from "../../VideoSlideshow";
import ProjectPage from "../../../components/case-studies/ProjectPage";
import { projects } from "../../../content/projects";

export default function CreatorCampaignPage() {
  return <ProjectPage project={projects.creatorCampaign} media={<VideoSlideshow />} />;
}
