// CSS
import "./Header.css";

// React Router DOM
import { NavLink } from "react-router-dom";

// Logo
import navbarLogo from "../../assets/logos/navbar-logo.png";

// Icons
import rightArrow from "../../assets/icons/header/right-arrow.png";
import darkMode from "../../assets/icons/header/dark-mode.png";
import lightMode from "../../assets/icons/header/light-mode.png";

function Header() {
  return (
    <header>
      <div className="container">
        <NavLink to="/" className="logo flex">
          <img src={navbarLogo} alt="Navbar Logo" />
          <h1>. Olimov</h1>
        </NavLink>

        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>

          <a
            href="https://t.me/Sardorbek0731"
            className="hireMe flex"
            target="_blank"
          >
            <h1>Hire Me</h1>
            <img src={rightArrow} alt="Right Arrow Icon" />
          </a>
        </nav>

        <div className="headerBtns flex">
          <div className="mode">
            <div className="darkMode modeBtn flex">
              <img src={darkMode} alt="Dark Mode Icon" />
            </div>
            <div className="lightMode modeBtn hidden">
              <img src={lightMode} alt="Light Mode Icon" />
            </div>
          </div>

          <span className="downloadCV flex">Download CV</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
