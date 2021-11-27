import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from "../src/pages/Home/Home"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from '../src/pages/Login/Login';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import axios from "axios";
import Criar from '../src/pages/Criar/Criar';
import Perfil from '../src/pages/Perfil/Perfil';
import Game from '../src/pages/Game/Game'
import Favorites from '../src/pages/Favorites/Favorites'

axios.defaults.baseURL = "https://nintendo-shop.herokuapp.com";
axios.defaults.headers.post["content-Type"] = "application/json";

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <BrowserRouter>
      <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/criar' element={<Criar/>}/>
      <Route path='/game' element={<Game/>}/>
      <Route path='/perfil' element={<Perfil/>}/>
      <Route path='/favorite' element={<Favorites/>}/>

    
      </Routes>
    </BrowserRouter>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);


