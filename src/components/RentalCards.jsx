import RentalCard from "./RentalCard";

function RentalCards({ list }) {
  return (
    <section className="rental-cards">
      {list.map(({ id, cover, title }) => (
        <RentalCard key={id} id={id} cover={cover} title={title} />
      ))}
    </section>
  );
}

export default RentalCards;
