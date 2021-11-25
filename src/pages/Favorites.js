import React from 'react';
import CardList from '../components/CardList/CardList';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Favorites = () => {

    const [favorite, setFavorite] = useState([]);
    const [mounted, setMounted] = useState(false);
    const [nLogado, setNLogado] = useState(true);

    useEffect(() => {
        setMounted(true)

        if(localStorage.token) {
            const token = localStorage.token
        }
    })

    return (
        <div>
            
        </div>
    )
}

export default Favorites
