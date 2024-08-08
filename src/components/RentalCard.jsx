import { Link } from "react-router-dom";

function RentalCard({ id, cover, title }) {
  return (
    <article className="rental-card">
      <Link className="stretched-link" to={`/rental/${id}`} />
      <img className="card-img" src={cover} alt={title} />
      <div className="filter"></div>
      <h2 className="title">{title}</h2>
    </article>
  );
}

export default RentalCard;
