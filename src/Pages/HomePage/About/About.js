import "./About.css";

export default function About() {
  return (
    <section id="about-section">
      <div className="left-container">
        <h1 style={{ color: "#000" }}>Little Lemon</h1>
        <h2 style={{ color: "#000" }}>Chicago</h2>
        <div
          style={{
            width: "300px",
            marginTop: "9px",
            marginBottom: "9px",
          }}
        >
          <p style={{ color: "#000" }}>
            Lorem ipsum dolor sit amet consectetur. Quis odio ut non tellus
            sagittis eget. Facilisis adipiscing adipiscing posuere congue
            interdum est. Integer sed volutpat tristique suspendisse amet
            egestas. Vel ipsum pellentesque diam ut elementum enim.
          </p>
        </div>
      </div>

      <div className="shop"></div>
      <div className="chef"></div>
    </section>
  );
}
