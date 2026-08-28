import Slideshow from "../components/case-studies/Slideshow";

const textiles = Array.from(
  { length: 46 },
  (_, index) => `/work/textiles/textile-${String(index + 1).padStart(2, "0")}.jpg`,
).filter((_, index) => index !== 5);

export default function TextileSlideshow() {
  return (
    <Slideshow label="TEXTILE RESEARCH / FIELD NOTES" itemLabel="photograph" items={textiles} mediaType="image" />
  );
}
