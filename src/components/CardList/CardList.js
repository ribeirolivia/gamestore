import React from 'react';
import './CardList.css';

const CardList = (props) => {
    return (
        <div className="card-list">
            
            <div className="cardlist" >
                <img src={props.image} className="cardimg" alt={props.name}/>
                <div className="card-body">
                    <h5 className="card-text">{props.name}</h5>
                </div>
                <div className="card-body">
                    <p className="card-text">{props.valor}</p>
                </div>
            </div>

        </div>
    )
}

export default CardList;