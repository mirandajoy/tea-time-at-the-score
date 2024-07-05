import "./Header.scss";
import logo from "../../assets/logos/the-score-wordmark.svg";

function Header() {
  return (
    <header>
      <nav className="nav">
        <div className="nav__content">
          <img src={logo} alt="The Score logo" className="nav__logo" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
