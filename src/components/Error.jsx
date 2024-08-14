import PropTypes from "prop-types";
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Error({ title, message, className, error = null }) {
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

Error.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string,
};

export default Error;
