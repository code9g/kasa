import React from "react";
import { Link, useLocation } from "react-router-dom";

function Error({ title, message, children }) {
  const location = useLocation();
  return (
    <div className="error">
      <h2 className="title">{title}</h2>
      <p className="message">{message}</p>
      {children}
      {location.pathname !== "/" && (
        <Link className="link" to="/">
          Retourner sur la page d'accueil
        </Link>
      )}
    </div>
  );
}

export default Error;
