import React from 'react';
import ReactDOM from 'react-dom/client';


import Navbar from './navbar.tsx';
// import ListenAgain from './listenagain.tsx';
import AlbumList from './albumitem.tsx';


import './estilos.css';
import '../index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <AlbumList />
  </React.StrictMode>
);