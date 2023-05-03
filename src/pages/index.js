import "./App.css";
import Navbar from "../components/Navbar.jsx";
import React, { useEffect, useState } from "react";
import { Characteres } from "../components/Characteres";
import Paginacion from "../components/Paginacion";
import image from "../images/thumb-1920-909641.webp";
import imagePhone from "../images/Mobile-Wallpaper-Rick-and-Morty.jpg";
function App() {
  const isBrowser = typeof window !== "undefined";
  const [characters, setCharacters] = useState([]);
  const [info, setinfo] = useState({});
  const URL = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (URL) => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setinfo(data.info);
      })
      .catch((error) => console.log(error));
  };
  const onPrevios = () => {
    fetchCharacters(info.prev);
  };
  const onNext = () => {
    fetchCharacters(info.next);
  };
  useEffect(() => {
    fetchCharacters(URL);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${window.innerWidth > 600 ? image : imagePhone})`,
        backgroundSize: `${window.innerWidth > 600 ? "" : "cover"}`,
        backgroundAttachment: "fixed",
      }}
    >
      <Navbar brand={"Rick And Morty"} />
      <div className="container nt-5">
        <Paginacion
          prev={info.prev}
          next={info.next}
          onPrevios={onPrevios}
          onNext={onNext}
        />
        <Characteres characteres={characters} />
        <Paginacion
          prev={info.prev}
          next={info.next}
          onPrevios={onPrevios}
          onNext={onNext}
        />
      </div>
    </div>
  );
}

export default App;
export const Head = () => <title>Rick And Morty App</title>;
