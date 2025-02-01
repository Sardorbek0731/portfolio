// CSS
import "./Header.css";

// React Router DOM
import { NavLink } from "react-router-dom";

// Icons
import rightArrow from "../../assets/icons/header/right-arrow.png";

function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>

          <a
            href="https://www.linkedin.com/in/sardorbek-olimov-b07b3b250/"
            className="hireMe flex"
            target="_blank"
          >
            <h1>Hire Me</h1>
            <img src={rightArrow} alt="Right Arrow Icon" />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
