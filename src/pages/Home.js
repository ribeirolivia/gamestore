import React from "react";
import Navbar from "../components/NavBar/Navbar";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import List from "../components/List/List";

const Home = () => {
    return (
        <div className="home">
            <Navbar/>
            <Card
            image='https://data1.origin.com/asset/content/dam/originx/web/app/programs/Store/mlu-november-2020/Black_Friday_Sale_store_takeover_en_ww_v1.jpg/a637c45c-55bd-4777-a963-7ff5c97dbe62/original.jpg'
            name="Black Friday GAME STORE"
            valor="R$200,00"
            years="12"
            classification="Violência, Conteúdo Sexual"
            />
            <List/>

            <Footer/>
            
        </div>
    )
}

export default Home;

