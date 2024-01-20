import "./Nav.css";
import { Link } from "react-router-dom";

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
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="/#about-section">About</a>
        </li>
        <li>
          <a href="/#hilight-section">Menu</a>
        </li>
        <li>
          <Link to="/booking">Reservations</Link>
        </li>
        <li>
          <Link to="#order-online">Order Online</Link>
        </li>
        <li>
          <Link to="#login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}
