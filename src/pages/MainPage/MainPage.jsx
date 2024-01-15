import React, {  useEffect, useState } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import Hero from '../../components/Hero/Hero';

import RegisterModalWindComponent from '../../components/RegisterModalWindComponent/RegisterModalWindComponent';





const MainPage = () => {

  const [showModal, setShowModal] = useState(false);
  
  console.log(showModal);
  useEffect(() => {
        const storedShowModal = localStorage.getItem('showModal');

       if (storedShowModal && storedShowModal !== 'false') {
         setShowModal(true);
       } 
  },[])
  

   const handleOpenModal = (openModal) => {
    setShowModal(openModal);
  }
  return (
    <div>
      <Hero />
      <ProductList />

      

      {(showModal) ? (<RegisterModalWindComponent onChange={ handleOpenModal} />):""};
    </div>
  );
};

export default MainPage;
