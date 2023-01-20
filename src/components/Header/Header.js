import React from 'react';
import './Header.css';
import logo from './assets/pokelogo.png';

export default function Header() {
  return <header>
    <img src={logo} ></img>
    <h1>Pokedex !</h1>
    <div className='fixer'></div>
  </header>;
}