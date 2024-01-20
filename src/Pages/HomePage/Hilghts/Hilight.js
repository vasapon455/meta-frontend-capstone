import "./Hilight.css";
import Card from "../Card/Card";

export default function Hilight() {
  return (
    <section id="hilight-section">
      <div className="hilight-top">
        <h2 className="hilight-header">This Weeks Specials</h2>
        <button className="btn-small">Online Menu</button>
      </div>
      <div className="card-container">
        <Card
          image="assets/greeksalad.jpg"
          alt="Greek Salad"
          name="Greek Salad"
          price="12.20$"
          descriptiion={
            "Lorem ipsum dolor sit amet consectetur. Sit pellentesque libero cursus amet est neque lobortis sapien."
          }
        />
        <Card
          image="assets/bruchetta.png"
          alt="bruchetta"
          name="Bruchetta"
          price="5.20$"
          descriptiion={
            "Lorem ipsum dolor sit amet consectetur. Sit pellentesque libero cursus amet est neque lobortis sapien."
          }
        />
        <Card
          image="assets/lemon dessert.jpg"
          alt="lemon dessert"
          name="Lemon Dessert"
          price="5.00$"
          descriptiion="Lorem ipsum dolor sit amet consectetur. Sit pellentesque libero cursus amet est neque lobortis sapien."
        />
      </div>
    </section>
  );
}
