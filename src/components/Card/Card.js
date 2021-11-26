import React from "react";
import "./Card.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Card = (props) => {


  const [games, setGames] = useState([]);
  const [mounted, setMounted] = useState(false);
  const getData = async() => {
    await axios.get(`/game/find/${props.id}`)
    .then(response => {
          if(mounted) {
            setGames(response.data)
          }
        })
    }

    useEffect(() => {
        setMounted(true)
        getData()
    }, [mounted])


  return (
    <div>
      <div className="card">
        <img src={games.image} className="card-img-top" alt={games.name} />
        <div className="card-body">
          <h5 className="card-text">{games.name}</h5>
        </div>
        <div className="card-body">
          <p className="card-text">{games.valor}</p>
        </div>
        <div className="card-years">
          <p className="card">{games.years}</p>
          <p className="card-text">{games.classification}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
