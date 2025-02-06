// CSS
import "./Header.css";

// React Router DOM
import { NavLink } from "react-router-dom";

// Icons
import linearRightArrow from "../../assets/icons/arrows/linear-right.png";
import downArrow from "../../assets/icons/arrows/down.png";
import setting from "../../assets/icons/header/setting.png";
import uzb from "../../assets/icons/flags/uzb.png";
import eng from "../../assets/icons/flags/eng.png";
import rus from "../../assets/icons/flags/rus.png";

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
            <img src={linearRightArrow} alt="Right Arrow Icon" />
          </a>
        </nav>
        <div className="navbarBtns flex">
          <div className="language">
            <div className="languageValue flex">
              <img className="flagIcon" src={uzb} alt="UZB Language Icon" />
              {"O'"}zbek
              <img
                className="arrowIcon"
                src={downArrow}
                alt="Down Arrow Icon"
              />
            </div>
            <ul className="languageOptions">
              <li className="languageOption flex">
                <img
                  className="flagIcon"
                  src={eng}
                  alt="English Language Icon"
                />
                English
              </li>
              <li className="languageOption flex">
                <img
                  className="flagIcon"
                  src={rus}
                  alt="Russian Language Icon"
                />
                Русский
              </li>
            </ul>
          </div>
          <div className="settings">
            <div className="settingBtn flex">
              <img src={setting} alt="Setting Icon" />
            </div>
            <div className="settingItem"></div>
            <div className="settingItem"></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
