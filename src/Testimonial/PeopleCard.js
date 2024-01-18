export default function PeopleCard({ name, image, review, point }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "Column",
        alignItems: "flex-start",
        justifyContent: "center",
        width: "160px",
        height: "160px",
        backgroundColor: "#EDEFEE",
        padding: "20px",
      }}
    >
      <h3 style={{ textAlign: "left" }}>Rating: {point}</h3>
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img className="people-image" src={image} alt="people" />
        <h4>{name}</h4>
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
