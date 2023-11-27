import React from 'react';
import slide1 from '../images/1.png';
import ProductList from '../components/ProductList/ProductList';

const MainPage = () => {
  return (
    <div className="container">
      <h1 style={{ color: '#000' }}>MainPage</h1>
      <img width="100%" src={slide1} alt="slide1" />
      <ProductList />
    </div>
  );
};

export default MainPage;
