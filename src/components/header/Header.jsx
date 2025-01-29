// CSS
import "./Header.css";

// React Router DOM
import { NavLink } from "react-router-dom";

// Logo
import navbarLogo from "../../assets/logos/navbar-logo.png";

// Icons
import headphone from "../../assets/icons/header/headphone.png";

function Header() {
  return (
    <header>
      <div className="container">
        <NavLink to="/" className="logo">
          <img src={navbarLogo} alt="Navbar Logo" />
          <h1>. Olimov</h1>
        </NavLink>

        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <a href="tel: +998915723949" className="phone">
            <img src={headphone} alt="Headphone Icon" />
            <h1>+998-(94)-117-3949</h1>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
