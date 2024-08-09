import { useParams } from "react-router-dom";

import Slideshow from "../components/Slideshow.jsx";
import rentals from "../utils/rentals";
import NotFound from "./NotFound";

function Rental() {
  const { id } = useParams();

  const rental = rentals.find((item) => item.id === id);
  if (!rental) {
    return <NotFound />;
  }

  return (
    <main className="rental">
      <div className="container">
        <Slideshow slides={rental.pictures} alt="" />
      </div>
    </main>
  );
}

export default Rental;
