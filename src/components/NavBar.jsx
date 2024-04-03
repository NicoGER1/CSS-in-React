import { PropTypes } from "prop-types";

function NavBar({ Movies, movieIndex, setMovieIndex }) {
  const handleNextMovie = () => {
    setMovieIndex(movieIndex + 1);
  };

  const handlePreviousMovie = () => {
    setMovieIndex(movieIndex - 1);
  };

  return (
    <>
      {" "}
      {movieIndex > 0 ? (
        <button onClick={handlePreviousMovie}>Previous</button>
      ) : undefined}
      {movieIndex < Movies.length - 1 ? (
        <button onClick={handleNextMovie}>Next</button>
      ) : undefined}
    </>
  );
}

NavBar.propTypes = {
  movieIndex: PropTypes.number.isRequired,
  Movies: PropTypes.array.isRequired,
  setMovieIndex: PropTypes.func.isRequired,
};

export default NavBar;
