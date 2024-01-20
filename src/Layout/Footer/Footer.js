import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <img
        width="50px"
        height="auto"
        src="assets/footer-logo.svg"
        alt="restaurant"
      ></img>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
          height: "200px",
          textAlign: "left",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "200px",
            textAlign: "left",
          }}
        >
          <h2 style={{ color: "#F4CE14", textAlign: "left" }}>Little Lemon</h2>
          <p style={{ maxWidth: "200px" }}>
            Lorem ipsum dolor sit amet consectetur. Neque habitant eu amet a a
            est in feugiat. Sed pharetra pellentesque sem egestas. Sagittis
            pretium egestas.
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          alignContent: "left",
          height: "200px",
          textAlign: "left",
        }}
      >
        <h2 style={{ color: "#F4CE14" }}>Contact</h2>
        <p>Phone Number</p>
        <p>Fax</p>
        <p>Email Address</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          height: "200px",
          textAlign: "left",
        }}
      >
        <h2 style={{ color: "#F4CE14" }}>Social Media</h2>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Twitter</p>
      </div>
    </footer>
  );
}
