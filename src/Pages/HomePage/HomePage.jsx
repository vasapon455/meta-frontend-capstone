import Hero from "../HomePage/Hero/Hero";
import Hilight from "../HomePage/Hilghts/Hilight";
import Testimonial from "../HomePage/Testimonial/Testimonial";
import About from "../HomePage/About/About";

export default function HomePage({ review }) {
  return (
    <>
      <Hero />
      <Hilight />
      <Testimonial review={review} />
      <About />
    </>
  );
}
