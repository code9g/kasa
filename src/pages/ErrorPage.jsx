import React from "react";
import { useRouteError } from "react-router-dom";
import Error from "../components/Error";

function ErrorPage() {
  const error = useRouteError();

  console.error(error);

  return (
    <main className="error-page">
      <div className="container">
        <Error title="Oups !" message="Une erreur innatende a eu lieu !">
          <p className="message">
            <i>{error.statusText || error.message}</i>
          </p>
        </Error>
      </div>
    </main>
  );
}

export default ErrorPage;
