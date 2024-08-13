import Error from "../components/Error";

function NotFound() {
  return (
    <main className="not-found">
      <Error
        title="404"
        message="Oups! La page que vous demandez n'existe pas."
      />
    </main>
  );
}

export default NotFound;
