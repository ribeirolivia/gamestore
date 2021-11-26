import React from "react";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import List from "../../components/List/List";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [games, setGames] = useState([]);
  const [mounted, setMounted] = useState(false);
  const getData = async () => {
    await axios.get("/game/findMany").then((response) => {
      setGames(response.data);
    });
  };

  useEffect(() => {
    setMounted(true);
    getData();
  }, [mounted]);

  return (
    <div className="home">
      
        {
            games.map(game => (
                <Card
                    id={game.id}
                    image={game.image}
                    name={game.name}
                    valor={game.price}
                    years={game.year}
                    classification={game}
                />
            ))
        }
      
      <List />

      <Footer />
    </div>
  );
};

export default Home;
