import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";

const Perfil = () => {

    const [user, setUser] = useState({});
    const [mounted, setMounted] = useState(false);
    const [notLogged, setNotLogged] = useState(true);

    useEffect(() =>{
        setMounted(true)
        if(localStorage.token){
            const token = localStorage.token;

            const config = {
                headers:{ Authorization: `Bearer ${token}`}
            }
            axios.get('/auth/me', config)
            .then(response => {
                setNotLogged(false)
                setUser(response.data)
            })
        }
    }, [mounted])


    return (
        <div className='perfil'>
            <div className='perfilimg'>
                <img src='https://lh3.googleusercontent.com/proxy/M9reMOegNK6Vu24YICaHF1XeYHRzpIwa8MXT1efpHDNj83f4GicaGy8KxGbVQZljo5GKajxQwB0pPTLrLgDi9O_1qvHayLwZobHVhjwoCxqBUiczR9N2k3lszydKONvSk5L5VyAMjtNaTEUTQ_Xn_YdRS5gcx5-Sntg' alt='Rex'/>

            </div>



            {
                !notLogged ? (
                    <>
                    <h3>{user.name}</h3>
                    <span>Email: {user.email}</span>
                    <span>Membro desde: {user.createAt}</span>
                    </>
                ) : (
                    <h3>Sem dados do perfil, faça login!</h3>
                )
            }
        </div>
    )
}

export default Perfil;
