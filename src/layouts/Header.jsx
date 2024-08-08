import { NavLink } from "react-router-dom";
import logo from "../assets/logos/red.svg";
import { cnActiveOrPending } from "../utils/tools";

const links = [
  { to: "/home", title: "Accueil" },
  { to: "/about", title: "A propos" },
];

function Header() {
  return (
    <header className="header">
      <div className="container">
        <a href="/">
          <img src={logo} alt="Logo de Kasa" />
        </a>
        <nav className="nav-bar">
          <ul className="nav-list">
            {links.map(({ to, title }, index) => (
              <li className="nav-item" key={index}>
                <NavLink className={cnActiveOrPending("nav-link")} to={to}>
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
