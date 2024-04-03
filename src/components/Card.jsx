import { PropTypes } from "prop-types";
import "../style/Cards.scss";

function Card({ Movies }) {
  return (
    <>
      <figure className="card-container">
        <img className="image" src={Movies.cover} alt={Movies.title} />
        <figcaption className="data">
          <h1>{Movies.title} </h1>
          <h2>{Movies.realisator} </h2>
          <h2>( {Movies.date} ) </h2>
        </figcaption>
        <div className="rating">
        <p>Rate this movie</p> 
        <h3 className="star">★ ★ ★ ★ ★</h3>
        </div>
      </figure>
    </>
  );
}

Card.propTypes = {
  Movies: PropTypes.shape({
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    realisator: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }),
};

export default Card;
