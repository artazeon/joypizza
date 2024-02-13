import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/Home-Page';
import { CatalogPage } from './pages/Catalog-Page';
import { CardPage } from './pages/Card-Page';
import { BasketPage } from './pages/BasketPage';
import { NotFoundPage } from './pages/Not-Found-Page';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Sidebar } from './components/Sidebar/Sidebar';

const App = () => (
  <div className="App">
    <Header />
    <Sidebar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/catalog/card" element={<CardPage />} />
      <Route path="/cart" element={<BasketPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    <Footer />
  </div>
);

export default App;
