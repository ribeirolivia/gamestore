import React from 'react';
import CardList from '../../components/CardList/CardList';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Container from '../../components/Container/Container';

const Favorites = () => {

    const [favorite, setFavorite] = useState([]);
    const [mounted, setMounted] = useState(false);
    const [nLogado, setNLogado] = useState(true);

    useEffect(() => {
        setMounted(true)

        if(localStorage.token) {
            const token = localStorage.token;

            const config = {
                headers: { Authorization: ` ${token}`}
            }
            axios.get('/game/favorite', config)
            .then( response => {
                setNLogado(false);
                setFavorite(response.data.games);
            })
        }
    },[mounted])

    return (
        <div>
            <Container>
                {
                    favorite.map(game => (
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
    )
}

export default Favorites
