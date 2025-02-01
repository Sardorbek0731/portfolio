// CSS
import "./Home.css";

function Home() {
  return (
    <section>
      <div className="home container">
        <div className="homeTitle">
          <h3>Hi, 👋</h3>
          <h2>
            {"I'm"} <span className="myName">Sardorbek Olimov</span>
          </h2>
          <h1>Frontend Developer & UI/UX Designer</h1>
          <p>
            I create sleek, user-friendly, and engaging digital experiences.
            Every project is a blend of creativity, precision, and
            functionality. Let’s build something exceptional together!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
