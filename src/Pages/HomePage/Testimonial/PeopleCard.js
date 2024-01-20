export default function PeopleCard({ name, image, review, point }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "Column",
        alignItems: "flex-start",
        justifyContent: "center",
        width: "160px",
        height: "auto",
        backgroundColor: "#EDEFEE",
        padding: "20px",
      }}
    >
      <h3 style={{ textAlign: "left" }}>Rating: {point}</h3>
      <div
        style={{
          display: "flex",
          gap: "0px",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
          width: "auto",
        }}
      >
        <img className="people-image" src={image} alt="people" />
        <div style={{ textAlign: "center", padding: "10px" }}>
          <h4>{name}</h4>
        </div>
      </div>
      <p
        style={{
          color: "#000000",
          fontFamily: "Karla,serif",
          fontStyle: "italic",
          fontSize: "1rem",
          textAlign: "center",
        }}
      >
        {review}
      </p>
    </div>
  );
}
