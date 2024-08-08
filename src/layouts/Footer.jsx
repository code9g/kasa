import logo from "../assets/logos/white.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <img className="logo" src={logo} alt="Logo de Kasa" />
        <p className="copyright">&copy; 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
