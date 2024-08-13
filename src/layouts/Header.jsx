import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logos/red.svg";

const links = [
  { to: "/home", title: "Accueil" },
  { to: "/about", title: "A propos" },
];

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link className="brand" to="/">
          <img className="logo" src={logo} alt="Logo de Kasa" />
        </Link>
        <nav className="nav-bar">
          <ul className="nav-list">
            {links.map(({ to, title }, index) => (
              <li className="nav-item" key={index}>
                <NavLink className="nav-link" to={to}>
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
