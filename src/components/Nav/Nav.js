import "./Nav.css";

export default function Nav() {
  return (
    <nav>
      <img
        className="logo"
        src="assets/Logo.svg"
        alt="logo"
        width="148px"
        height="40px"
      ></img>
      <ul>
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Menu">Menu</a>
        </li>
        <li>
          <a href="#Reservations">Reservations</a>
        </li>
        <li>
          <a href="#order-online">Order Online</a>
        </li>
        <li>
          <a href="#login">Login</a>
        </li>
      </ul>
    </nav>
  );
}
