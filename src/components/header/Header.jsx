// CSS
import "./Header.css";

function Header() {
  return (
    <header>
      <nav>
        <h1 className="myName">S.Olimov</h1>

        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
