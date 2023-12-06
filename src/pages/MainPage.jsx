import React from 'react';
import ProductList from '../components/ProductList/ProductList';
import Hero from '../components/Hero/Hero';
import RegisterPage from './RegisterPage/RegisterPage';



const MainPage = () => {
  return (
    <div>
      <Hero />
      <ProductList />
      <RegisterPage/>
      

    </div>
  );
};

export default MainPage;
