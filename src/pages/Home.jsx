import { useLoaderData } from "react-router-dom";
import bg from "../assets/banners/home.jpg";
import Banner from "../components/Banner";
import RentalCards from "../components/RentalCards";

function Home() {
  const { rentals } = useLoaderData();

  return (
    <main className="home">
      <div className="container">
        <Banner background={bg}>Chez vous, partout et ailleurs</Banner>
        <RentalCards list={rentals} />
      </div>
    </main>
  );
}

export default Home;
