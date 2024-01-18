import PeopleCard from "./PeopleCard";
import "./Testimonial.css";

export default function Testimonial() {
  return (
    <section id="testimonial-section">
      <h2>Testimonial</h2>
      <div className="people-container">
        <PeopleCard
          name="John Lemon"
          image="assets/people1.png"
          review='"Taste Good."'
          point="5"
        />
        <PeopleCard
          name="Ken Tucker"
          image="assets/people2.png"
          review='"Meaningful Dinner."'
          point="5"
        />
        <PeopleCard
          name="Helena Smith"
          image="assets/people3.png"
          review='"I will be back again."'
          point="4"
        />
        <PeopleCard
          name="Jane Angel"
          image="assets/people4.png"
          review='"Must Try."'
          point="5"
        />
      </div>
    </section>
  );
}
