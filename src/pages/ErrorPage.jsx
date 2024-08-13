import React from "react";
import { useRouteError } from "react-router-dom";
import Error from "../components/Error";

function ErrorPage() {
  const error = useRouteError();

  console.error(error);

  return (
    <main className="error-page">
      <div className="container">
        <Error
          title="Oups !"
          message="Une erreur innatende a eu lieu !"
          error={error}
        />
      </div>
    </main>
  );
}

ErrorPage.propTypes = {};

export default ErrorPage;
