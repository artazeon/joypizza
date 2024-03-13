import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/index.scss';
import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';
import { CardPage } from './pages/CardPage';
import { BasketPage } from './pages/BasketPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

const App = () => {
  const isDesktop = window.innerWidth >= 1300;

  return (
    <div className="App">
      <Header />
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/card" element={<CardPage />} />
        <Route path="/cart" element={<BasketPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer template={isDesktop && 'desktop'} />
    </div>
  );
};

export default App;
