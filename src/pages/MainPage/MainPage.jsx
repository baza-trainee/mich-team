import React, {  useContext, useEffect, useState } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import Hero from '../../components/Hero/Hero';
import RegisterModalWindComponent from '../../components/RegisterModalWindComponent/RegisterModalWindComponent';
import UserContext from '../../UserData/UserContext';
import { requestGoogleDataUser } from '../../services/google-auth';




const MainPage = () => {
  const userData = useContext(UserContext);

  console.log(userData);

  const [showModal, setShowModal] = useState(false);
  const [showModalIsActive, setShowModalIsActive] = useState(false);
  
  const isActivatePresent = new URLSearchParams(window.location.search).has('activate');
  
  
  useEffect(() => {
      

        const storedShowModal = localStorage.getItem('showModal');

       if (storedShowModal && storedShowModal !== 'false') {
         setShowModal(true);
      } 
    
    if (isActivatePresent) {
      setShowModalIsActive(true);
    } else {
      setShowModalIsActive(false);
      }

  },[isActivatePresent])
  
    console.log(showModalIsActive);
   const handleOpenModal = (openModal) => {
    setShowModal(openModal);
  }

  const code = new URLSearchParams(window.location.search).get('code');
  
console.log(code)

  if (code) {
    requestGoogleDataUser();
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
