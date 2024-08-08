import rentals from "../utils/rentals";
import RentalCard from "./RentalCard";

function RentalCards() {
  return (
    <section className="rental-cards">
      {rentals.map(({ id, cover, title }) => (
        <RentalCard key={id} id={id} cover={cover} title={title} />
      ))}
    </section>
  );
}

export default RentalCards;
