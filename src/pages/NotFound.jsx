import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="not-found">
      <div className="container">
        <h2 className="title">404</h2>
        <p className="message">Oups! La page que vous demandez n'existe pas.</p>
        <Link className="link" to="/home">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
