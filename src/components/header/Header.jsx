// CSS
import "./Header.css";

// React Router DOM
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1 className="myName">S.Olimov</h1>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;
