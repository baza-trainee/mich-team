import React, { useContext, useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { CheckbBoxDivRememb, LabelCheck, LinkRememb, RegistForm, RegistInputCheck, RegisterDivInput, RegisterTitle } from './RegisterForm.styled';
import ErorMessageComponent from '../ErorMessageComponent/ErorMessageComponent';
import DivPasswordComponet from '../DivPasswordComponent/DivPasswordComponent';
import BtnSign from '../BtnSign/BtnSign';
import { requestLoginUser } from '../../services/user-autor-app';
import UserContext from '../../UserData/UserContext';
import { useNavigate } from 'react-router-dom';



const EnterForm = () => {
  const userData = useContext(UserContext);

  const [password, setPassword] = useState(true);
  const [newUser, setNewUser] = useState(false);

  const [trueEmail, setTrueEmail] = useState(true);
  const [truePassword, setTruePassword] = useState(true);

  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPassvordValue] = useState('');

  const [isCheckedRemember, setIsCheckedRemember] = useState(false);

  const history = useNavigate();

  function isValidEmail(email) {
  
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
  }

  function isValidPassword(password) {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
        return passwordRegex.test(password);
  }

  const handleOnClick = (e, email, password) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      Notify.failure('Емейл не валідний');
      setTrueEmail(false);
      return;
    }

    if (!isValidPassword(password)) {
      Notify.failure('Пароль не валідний');
      setTruePassword(false);
      return;
    }
        
    setTrueEmail(true);
    setTruePassword(true);
        
    const UserData = {
      "password": passwordValue,
      "email": emailValue,
    }
    
    const responseData = requestLoginUser(UserData); 
    
    responseData.then(result => {
         
            userData.UserData.setUserEmail(emailValue);
            userData.UserData.setUserPassword(passwordValue);
    
            history('/');
           
            return result;
        })
        .catch(error => {
            console.log(error)
            setNewUser(true);
            e.target.classList.remove('active');
            return;
        });

     e.target.classList.add('active');
  }

  const handleOnChangeEmail = (value) => {
        setEmailValue(value);
        setTrueEmail(true);

    }

    const handleOnChange = (value) => {
        setPassvordValue(value);
        setTruePassword(true);
  }
  
   const handleCheckboxChangeRemember = () => {
        setIsCheckedRemember(!isCheckedRemember);
  };
  
  const handleRememberPassword = () => {
    history('/');
    localStorage.setItem("showModalPasswordForgot", true);
  }

  return (
    <RegistForm>
        <RegisterTitle>УВІЙТИ</RegisterTitle>

      {(!newUser) ? '' :
        (<ErorMessageComponent
          message = "Адреса електронної пошти або пароль невірні."
        />)
      }

        <DivPasswordComponet
          className={(trueEmail) ? '' : 'redError'}
          type="email"
          titleInput="Введіть e-mail"
          onChange={(e) => handleOnChangeEmail(e.target.value)}
          value={emailValue}
          onClick={() => setPassword(!password)}
          password={password}
        />
      
        <DivPasswordComponet
          className={(truePassword) ? '' : 'redError'}
          type={password ? 'password' : 'text'}
          titleInput="Введіть пароль"
          onChange={(e) => handleOnChange(e.target.value)}
          value={passwordValue}
          onClick={() => setPassword(!password)}
          password={password}
      />
      
      <CheckbBoxDivRememb>
        <RegisterDivInput>
          <RegistInputCheck
            type="checkbox"
            id="rememb"
            checked={isCheckedRemember}
            onChange={handleCheckboxChangeRemember}
          /> 
          <LabelCheck htmlFor="rememb">Запам&rsquo;ятати мене </LabelCheck>
        </RegisterDivInput>
        <LinkRememb to="/" onClick={handleRememberPassword()}>Забули пароль?</LinkRememb>
      </CheckbBoxDivRememb>
      <BtnSign
        onClick={(e) => handleOnClick(e, emailValue,passwordValue)}
        title='УВІЙТИ'
      />
    </RegistForm>
  );
};

export default EnterForm;
