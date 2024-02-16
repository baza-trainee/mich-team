import React, {  useContext, useEffect, useState } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import Hero from '../../components/Hero/Hero';
import RegisterModalWindComponent from '../../components/RegisterModalWindComponent/RegisterModalWindComponent';
import UserContext from '../../UserData/UserContext';
import { googleAuth } from '../../services/google-auth';




const MainPage = () => {
  const userData = useContext(UserContext);

  console.log(userData);

  const [showModal, setShowModal] = useState(false);
  const [showModalIsActive, setShowModalIsActive] = useState(false);
  
  const location = new URLSearchParams(window.location.search);
  
  

  useEffect(() => {
      

        const storedShowModal = localStorage.getItem('showModal');

       if (storedShowModal && storedShowModal !== 'false') {
         setShowModal(true);
      } 
    
    if (location.has('activate')) {
      setShowModalIsActive(true);
    } else {
      setShowModalIsActive(false);
      }

    if (location.has('state') && location.has('code')) {
        const state = location.get('state');
      const code = location.get('code');
      googleAuth(state, code);
    }  
  
  },[location])
  
    console.log(showModalIsActive);
   const handleOpenModal = (openModal) => {
    setShowModal(openModal);
  }

  

  return (
    <div>
      <Hero />
      <ProductList />

      

      {((showModal)||(showModalIsActive) )?
        (<RegisterModalWindComponent
          onChange={handleOpenModal}
          isActive={showModalIsActive}
        />) : ""};
    </div>
  );
};

export default MainPage;
