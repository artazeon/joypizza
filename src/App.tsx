import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import Catalogpage from './pages/Catalogpage';
import Cardpage from './pages/Cardpage';
import Cartpage from './pages/Cartpage';
import Notfoundpage from './pages/Notfoundpage';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcom to Joy Pizza React App</p>
          <Link to="/">Home page</Link>
          <Link to="/catalog">Catalog page</Link>
          <Link to="/catalog/card">Card page</Link>
          <Link to="/cart">Cart page</Link>
          <Link to="/404">404 page</Link>
        </header>
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/catalog" element={<Catalogpage />} />
        <Route path="/catalog/card" element={<Cardpage />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="*" element={<Notfoundpage />} />
      </Routes>
    </>
  );
}

export default App;
