import bg from "../assets/banners/home.jpg";
import Banner from "../components/Banner";
import RentalCards from "../components/RentalCards";

function Home() {
  return (
    <main className="home">
      <div className="container">
        <Banner background={bg}>Chez vous, partout et ailleurs</Banner>
        <RentalCards />
      </div>
    </main>
  );
}

export default Home;
