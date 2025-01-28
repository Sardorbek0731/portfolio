// CSS
import "./Home.css";

// Images
import myImage from "../../assets/images/personal/my-image.jpg";

function Home() {
  return (
    <section>
      <div className="home">
        <img className="myImage" src={myImage} alt="Sardorbek's image" />
      </div>
    </section>
  );
}

export default Home;
