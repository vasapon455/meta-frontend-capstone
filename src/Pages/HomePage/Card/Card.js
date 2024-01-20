import "./Card.css";

export default function Card({ image, text, name, price, descriptiion }) {
  return (
    <div className="card">
      <img className="cardImage" src={image} alt={text}></img>
      <div className="card-content">
        <h3>{name}</h3>
        <span
          style={{
            color: "rgba(238, 153, 114, 1)",
            padding: "0px",
            margin: "0px",
            textAlign: "center",
            display: "inline",
          }}
        >
          {price}
        </span>
      </div>
      <p>{descriptiion}</p>
      <div
        className="button-container"
        style={{
          display: "flex",
          gap: "5px",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
        aria-label="On Click"
      >
        <a href="order" role="button">
          Order a delivery
        </a>
        <img
          src="assets/order-icon.svg"
          className="order-icon"
          alt="click to order."
        />
      </div>
    </div>
  );
}
