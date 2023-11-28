import React from 'react';
import slide1 from '../images/1.png';
import ProductList from '../components/ProductList/ProductList';
import { RegisterPage } from './RegisterPage/RegisterPage';

const MainPage = () => {
  return (
    <div>
      <img width="100%" src={slide1} alt="slide1" />
      <ProductList />
      <RegisterPage/>
    </div>
  );
};

export default MainPage;
