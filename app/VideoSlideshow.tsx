import Slideshow from "../components/case-studies/Slideshow";

const films = [
  "/work/campaign-film-01.mp4",
  "/work/campaign-film-02.mp4",
  "/work/campaign-film-03.mp4",
  "/work/campaign-film-04.mp4",
];

export default function VideoSlideshow() {
  return (
    <Slideshow label="SELECTED UGC / CREATOR FILMS" itemLabel="video" items={films} mediaType="video" />
  );
}
