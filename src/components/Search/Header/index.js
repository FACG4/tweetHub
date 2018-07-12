import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import image from './header.svg';


const Header =()=> {
  return (
    <header>
    <img src={image} alt="header logo"  />
    </header>
  )
}

export default Header;
