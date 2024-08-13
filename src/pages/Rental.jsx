import { useLoaderData } from "react-router-dom";
import Collapse from "../components/Collapse";
import Host from "../components/Host";
import Rating from "../components/Rating";
import Slideshow from "../components/Slideshow.jsx";
import NotFound from "./NotFound.jsx";

function Rental() {
  const { rental } = useLoaderData();

  if (!rental) {
    return <NotFound />;
  }

  return (
    <main className="rental">
      <div className="container">
        <Slideshow slides={rental.pictures} />
        <div className="info">
          <div className="info-rental">
            <h2 className="title">{rental.title}</h2>
            <p className="location">{rental.location}</p>
            <ul className="tags">
              {rental.tags.map((tag, index) => (
                <li className="tag" key={index}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <div className="info-host">
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
