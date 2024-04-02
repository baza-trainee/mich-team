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

  // змінні для відображення модалок
  const [showModal, setShowModal] = useState(false);
  const [showModalNewUser, setShowModalNewUser] = useState(false);
  const [showModalIsActive, setShowModalIsActive] = useState(false);
  const [showModalPasswordForgot, setShowModalPasswordForgot] = useState(false);
  const [showModalPasswordForgotOfEmail, setShowModalPasswordForgotOfEmail] = useState(false);
  const [showModalPasswordReset, setShowModalPasswordReset] = useState(false);
  const [showModalPasswordResetSuccess, setShowModalPasswordResetSuccess] = useState(false);


  const location = new URLSearchParams(window.location.search);

  const history = useNavigate();
  

  useEffect(() => {
      
    // змінні для перевірки localStorage (для відкриття потрібної модалки)
    const storedShowModalNewUser = localStorage.getItem('showModalNewUser');
    const storedShowModalIsActive = localStorage.getItem('showModalIsActive');
    const storedShowModalPasswordForgot = localStorage.getItem('showModalPasswordForgot');
    const storedShowModalPasswordReset = localStorage.getItem('showModalPasswordReset');
   
    
    // перевірки для відображення потрібної модалки
       if (storedShowModalNewUser && storedShowModalNewUser == 'true') {
         setShowModal(true);
         setShowModalNewUser(true);
       } else {
         setShowModalNewUser(false);
      }
    
      if (storedShowModalIsActive && storedShowModalIsActive == 'true') {
        setShowModalIsActive(true);
        setShowModal(true);
      }else  {
        setShowModalIsActive(false);
      }
    
      if (storedShowModalPasswordForgot && storedShowModalPasswordForgot == 'true') {
        setShowModalPasswordForgot(true);
        setShowModal(true);
      }else  {
        setShowModalPasswordForgot(false);
      }  

      if (location.has('user_password_reset')) {
        setShowModalPasswordForgotOfEmail(true);
        setShowModal(true);
      }else  {
        setShowModalPasswordForgotOfEmail(false);
      } 

      if (storedShowModalPasswordReset && storedShowModalPasswordReset == 'true') {
        setShowModalPasswordReset(true);
        setShowModal(true);
      }else  {
        setShowModalPasswordReset(false);
      }
    
      if ((location.has('password_reset_success'))) {
        setShowModalPasswordResetSuccess(true);
        setShowModal(true);
      }else  {
        setShowModalPasswordResetSuccess(false);
      }

    // для запиту на активацію користувача
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
    

      // для запиту на зміну пароля
      if (['password_reset', 'uid', 'token'].every(key => location.has(key))) {
        
        localStorage.removeItem('showModalPasswordForgot');
        localStorage.setItem("showModalPasswordReset", true);
        
      } 

      // для авторизації через google 
    if (location.has('state') && location.has('code')) {
      const state = location.get('state');
      const code = location.get('code');
        
      googleAuth(state, code).then(
        resp => {
        userData.UserData.setUserAccessToken(resp.access);
        userData.UserData.setUserRefreshToken(resp.refresh);

        sessionStorage.setItem("accessToken", resp.access);   
        sessionStorage.setItem("refreshToken", resp.refresh); 
          console.log(resp)
          history('/');
          
        }
      ).catch(error => {
        console.log(error)
      }
          
        
      )
    }
  
  },[location])
  
      //функція для закриття коммпоннента RegisterModalWindComponent
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
          newUserMessage={showModalNewUser}
          isActive={showModalIsActive}
          forgotPassword={showModalPasswordForgot}
          forgotPasswordSendEmail={showModalPasswordForgotOfEmail}
          newPassword={showModalPasswordReset}
          newPasswordResetSuccess={showModalPasswordResetSuccess}
        />) : ""};
    </div>
  );
};

export default MainPage;
