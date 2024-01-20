import PeopleCard from "./PeopleCard";
import "./Testimonial.css";

export default function Testimonial({ review }) {
  const randomRating = () => {
    const randomRating = Math.floor(Math.random() * 3 + 3);
    return `${randomRating}/5`;
  };

  return (
    <section id="testimonial-section">
      <h2>Testimonial</h2>
      {review ? (
        <div className="people-container">
          <PeopleCard
            name={review[0].name.first + " " + review[0].name.last}
            point={randomRating()}
            image={review[0].picture.medium}
            review="Yummers! Everything I tried was bursting with flavor. I want to hire their decorator to furnish my apartment. The food was flavorful, savory, and succulent. Easily earned their 5 stars! "
          />
          <PeopleCard
            name={review[1].name.first + " " + review[1].name.last}
            point={randomRating()}
            image={review[1].picture.medium}
            review="I stumbled on this undiscovered gem right in our neighboorhood. The waitress did an excellent job. The decor was unique and incredible. I removed a star because the floors were a little sticky."
          />
          <PeopleCard
            name={review[2].name.first + " " + review[2].name.last}
            point={randomRating()}
            image={review[2].picture.medium}
            review="I've got a fetish for good food and this place gets me hot! The desserts must be sprinkled with crack because I just craved for more and more. I was happy to see how clean everything was. The food was cooked to perfection. 5 stars!"
          />
          <PeopleCard
            name={review[3].name.first + " " + review[3].name.last}
            point={randomRating()}
            image={review[3].picture.medium}
            review="Decent place. I found the ambiance to be very charming. The food was flavorful, savory, and succulent. I would have rated this higher, but the chairs were a little sticky.
"
          />
        </div>
      ) : (
        <div style={{ textAlign: "center", margin: "40px" }}>
          <h2>No Reviews</h2>
        </div>
      )}
    </section>
  );
}
