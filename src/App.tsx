import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import CardPpage from './pages/CardPage';
import BasketPpage from './pages/BasketPage';
import NotfoundPage from './pages/NotFoundPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => (
  <div className="App">
    <Header />
    <Sidebar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/catalog/card" element={<CardPpage />} />
      <Route path="/cart" element={<BasketPpage />} />
      <Route path="*" element={<NotfoundPage />} />
    </Routes>
    <Footer />
  </div>
);

export default App;
