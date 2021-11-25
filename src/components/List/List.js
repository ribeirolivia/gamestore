import React from 'react';
import Container from '../Container/Container';
import CardList from '../CardList/CardList';
import axios from "axios";
import { useState, useEffect } from "react";

const List = () => {
    const [games, setGames] = useState([]);
    const [mounted, setMounted] = useState(false);
    const getData = async() => {
        await axios.get("/game/findMany")
        .then(response =>{
            setGames(response.data)
        })
    }

    useEffect(() =>{
        setMounted(true)
        getData()
    }, [mounted])

    return (
        <div>
            <Container>
            <CardList
                image={games.image}
                name={games.name}
                valor={games.price}
                key={games.id}
                />
            </Container>
        </div>
    )
}

export default List
