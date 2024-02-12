import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';

export const Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>Welcom to Joy Pizza React App</p>
    <Link to="/">Home page</Link>
    <Link to="/catalog">Catalog page</Link>
    <Link to="/catalog/card">Card page</Link>
    <Link to="/cart">Cart page</Link>
    <Link to="/404">404 page</Link>
  </header>
);
