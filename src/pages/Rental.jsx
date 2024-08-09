import { useParams } from "react-router-dom";
import Collapse from "../components/Collapse";
import Host from "../components/Host";
import Rating from "../components/Rating";
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
        <Slideshow slides={rental.pictures} />
        <div
          className="info"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div
            className="info-rental"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2 className="title">{rental.title}</h2>
            <p className="location">{rental.location}</p>
            <ul className="tags" style={{ display: "flex", listStyle: "none" }}>
              {rental.tags.map((tag, index) => (
                <li className="tag" key={index}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="info-host"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Host {...rental.host} />
            <Rating value={rental.rating} />
          </div>
        </div>
        <div className="more">
          <Collapse title="Description">{rental.description}</Collapse>
          <Collapse title="Équipements">
            <ul className="equipments">
              {rental.equipments.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </main>
  );
}

export default Rental;
