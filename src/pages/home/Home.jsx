// CSS
import "./Home.css";

// Icons
import telegram from "../../assets/icons/social-networks/telegram.png";
import linkedin from "../../assets/icons/social-networks/linkedin.png";
import github from "../../assets/icons/social-networks/github.png";
import instagram from "../../assets/icons/social-networks/instagram.png";
import facebook from "../../assets/icons/social-networks/facebook.png";

// Images
import heroImage from "../../assets/images/home/heroImage.jpg";

function Home() {
  return (
    <section>
      <div className="home flex">
        <div className="homeItems flex">
          <div className="homeTitle">
            <h3>Hi, 👋</h3>
            <h2>
              {"I'm"} <span className="primaryText">Sardorbek Olimov</span>
            </h2>
            <h1>
              Frontend Developer <span className="primaryText">&</span> UI/UX
              Designer
            </h1>
            <p>
              I create sleek, user-friendly, and engaging digital experiences.
              Every project is a blend of creativity, precision, and
              functionality. Let’s build something exceptional together!
            </p>
          </div>
          <div className="heroImage">
            <img src={heroImage} alt="Hero Image" />
          </div>
        </div>

        <div className="bgBlurs">
          <div className="bgBlur_1"></div>
          <div className="bgBlur_2"></div>
        </div>

        <div className="socialNetworks">
          <a
            href="https://www.facebook.com/p/Sardorbek-Olimov-61551653099727/"
            target="_blank"
          >
            <img src={facebook} alt="Facebook Icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/sardorbek-olimov-b07b3b250/"
            target="_blank"
          >
            <img src={linkedin} alt="Linkedin Icon" />
          </a>
          <a href="https://github.com/Sardorbek0731" target="_blank">
            <img src={github} alt="Github Icon" />
          </a>
          <a href="https://t.me/Sardorbek0731" target="_blank">
            <img src={telegram} alt="Telegram Icon" />
          </a>
          <a href="https://www.instagram.com/sardorbek0limov/" target="_blank">
            <img src={instagram} alt="Instagram Icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
