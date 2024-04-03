import { useState } from "react";
import "./style/App.scss";
import Card from "./components/Card";
import NavBar from "./components/NavBar";

function App() {
  const [movieIndex, setMovieIndex] = useState(0);

  const Movies = [
    {
      cover: "https://images.photowall.com/products/59754/alien.jpg?h=699&q=85",
      title: "Alien",
      realisator: "Ridley Scott",
      date: "1979",
    },
    {
      cover:
        "https://cineaffiches.fr/cdn/shop/products/terminator-1-copie_360x.jpg?v=1607270380",
      title: "Terminator",
      realisator: "James Cameron",
      date: "1984",
    },
    {
      cover:
        "https://fr.web.img5.acsta.net/medias/nmedia/18/36/17/53/18458816.jpg",
      title: "Bienvenue a Gattaca",
      realisator: "Andrew Niccol",
      date: "1997",
    },
    {
      cover:
        "https://www.zonanegativa.com/imagenes/2018/04/ready_player_one-508487059-large.jpg",
      title: "Ready Player One",
      realisator: "Steven Spielberg",
      date: "2018",
    },
  ];

  return (
    <>
      <NavBar
        movieIndex={movieIndex}
        setMovieIndex={setMovieIndex}
        Movies={Movies}
      />
      <Card Movies={Movies[movieIndex]} />
    </>
  );
}

export default App;
