import React from "react";
import "./Card.css";


const Card = () => {





  return (
    <div>
      <div className="card">
        <img src='https://cdn-ext.fanatical.com/production/product/1280x720/69e30985-ca02-4054-82d1-810de82c6c18.jpeg' className="card-img-top" alt='Battlefield 2042' />
        <div className="card-body">
          <h5 className="card-text">BATTLEFIELD 2042</h5>
        </div>
        <div className="card-body">
          <p className="card-text">R$ 200,00</p>
        </div>
        <div className="card-years">
          <p className="card">16</p>
          <p className="card-text">Violência</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
