import React from "react";
import Card from "../../components/Card/Card";
import Container from "../../components/Container/Container";
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
      
      <Card/>
      <Container>
      <List />
      </Container>

    </div>
  );
};

export default Home;
