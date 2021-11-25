import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from "../src/pages/Home"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from '../src/pages/Login';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import axios from "axios";

axios.defaults.baseURL = "https://nintendo-shop.herokuapp.com";
axios.defaults.headers.port["content-Type"] = "application/json";

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <BrowserRouter>
      <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>}/>
    
      </Routes>
    </BrowserRouter>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);


