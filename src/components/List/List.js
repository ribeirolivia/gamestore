import React from "react";
import Container from "../Container/Container";
import CardList from "../CardList/CardList";
import axios from "axios";
import { useState, useEffect } from "react";

const List = () => {
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
    <div>
      <Container>
        {
        games.map(game => (
          <CardList
            id={game.id}
            image={game.image}
            name={game.name}
            valor={game.price}
            key={game.id}
          />
        ))
        }
      </Container>
    </div>
  );
};

export default List;
