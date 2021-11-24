import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from "../src/pages/Home"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from '../src/pages/Login'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>}/>
    
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


