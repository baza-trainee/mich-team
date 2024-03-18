import React, {  useContext, useEffect, useState } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import Hero from '../../components/Hero/Hero';
import RegisterModalWindComponent from '../../components/RegisterModalWindComponent/RegisterModalWindComponent';
import UserContext from '../../UserData/UserContext';
import { googleAuth } from '../../services/google-auth';
import { requestAtivationUser } from '../../services/user-autor-app';
import { useNavigate } from 'react-router-dom';




const MainPage = () => {
  const userData = useContext(UserContext);

  console.log(userData);

  const [showModal, setShowModal] = useState(false);
  const [showModalNewUser, setShowModalNewUser] = useState(false);
  const [showModalIsActive, setShowModalIsActive] = useState(false);
  const [showModalPasswordForgot, setShowModalPasswordForgot] = useState(false);
  const [showModalPasswordReset, setShowModalPasswordReset] = useState(false);


  const location = new URLSearchParams(window.location.search);

  const history = useNavigate();
  

  useEffect(() => {
      

    const storedShowModalNewUser = localStorage.getItem('showModalNewUser');
    const storedShowModalIsActive = localStorage.getItem('showModalIsActive');
    const storedShowModalPasswordForgot = localStorage.getItem('showModalPasswordForgot');
    const storedShowModalPasswordReset = localStorage.getItem('showModalPasswordReset');

       if (storedShowModalNewUser && storedShowModalNewUser == 'true') {
         setShowModal(true);
         setShowModalNewUser(true);
       } else {
         setShowModalNewUser(false);
      }
    
    if (storedShowModalPasswordForgot && storedShowModalPasswordForgot == 'true') {
      setShowModalPasswordForgot(true);
      setShowModal(true);
    }else  {
      setShowModalPasswordForgot(false);
    }  

    if (storedShowModalIsActive && storedShowModalIsActive == 'true') {
      setShowModalIsActive(true);
      setShowModal(true);
    }else  {
      setShowModalIsActive(false);
    }

    if (storedShowModalPasswordReset && storedShowModalPasswordReset == 'true') {
      setShowModalPasswordReset(true);
      setShowModal(true);
    }else  {
      setShowModalPasswordReset(false);
    }

    
    if (['activation', 'uid', 'token'].every(key => location.has(key))) {
      const uidUser = location.get('uid');
      const tokenUser = location.get('token');
      const newUserData = {
            uid: `${uidUser}`,
            token: `${tokenUser}`
        }
      requestAtivationUser(newUserData);
      localStorage.removeItem('showModalNewUser');
      history('/?user=active');
      localStorage.setItem("showModalIsActive", true);
      
    } 

    if (['password_reset', 'uid', 'token'].every(key => location.has(key))) {
      const uidUser = location.get('uid');
      const tokenUser = location.get('token');
      const UserData = {
            uid: `${uidUser}`,
            token: `${tokenUser}`
        }
      requestAtivationUser(UserData);
      localStorage.removeItem('showModalPasswordForgot');
      localStorage.setItem("showModalPasswordReset", true);
      
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

      

      {(showModal)?
        (<RegisterModalWindComponent
          onChange={handleOpenModal}
          nevUserMessage={showModalNewUser}
          isActive={showModalIsActive}
          forgotPassword={showModalPasswordForgot}
          nevPassword={showModalPasswordReset}
        />) : ""};
    </div>
  );
};

export default MainPage;
