import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <img src={props.image} className="card-img-top" alt={props.name} />
        <div className="card-body">
          <h5 className="card-text">{props.name}</h5>
        </div>
        <div className="card-body">
          <p className="card-text">{props.valor}</p>
        </div>
        <div className="card-years">
          <p className="card">{props.years}</p>
          <p className="card-text">{props.classification}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
