import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero">
      <div className="left-container">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur. Quis odio ut non tellus
            sagittis eget. Facilisis adipiscing adipiscing posuere congue
            interdum est. Integer sed volutpat tristique suspendisse amet
            egestas. Vel ipsum pellentesque diam ut elementum enim.
          </p>
        </div>
        <button
          className="btn-small"
          type="button"
          style={{ marginTop: "24px" }}
        >
          Reserve Table
        </button>
      </div>
      <img
        src="assets/restaurantfood.jpg"
        className="hero-image"
        alt="food"
      ></img>
    </section>
  );
}
