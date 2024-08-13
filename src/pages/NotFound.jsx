import Error from "../components/Error";

function NotFound() {
  return (
    <main className="not-found">
      <div className="container">
        <Error
          title="404"
          message="Oups! La page que vous demandez n'existe pas."
        />
      </div>
    </main>
  );
}

export default NotFound;
