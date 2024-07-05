import "./Header.scss";
import logo from "../../assets/logos/the-score-wordmark.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="nav">
        <div className="nav__content">
          <Link to="/">
            <img src={logo} alt="The Score logo" className="nav__logo" />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
