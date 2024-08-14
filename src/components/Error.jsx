import React from "react";
import { Link, useLocation } from "react-router-dom";

function Error({ title, message, error = null }) {
  const location = useLocation();
  return (
    <div className="error">
      <h2 className="title">{title}</h2>
      <p className="message">{message}</p>
      {error && (
        <p className="message">
          <i>{error.statusText || error.message}</i>
        </p>
      )}
      {location.pathname !== "/" && (
        <Link className="link" to="/">
          Retourner sur la page d'accueil
        </Link>
      )}
    </div>
  );
}

export default Error;
