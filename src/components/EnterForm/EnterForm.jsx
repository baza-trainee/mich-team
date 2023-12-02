import React from 'react';
import BtnSingInGoogle from '../ButtonsSingIn/BtnSingInGoogle';
import BtnSingInFacebook from '../ButtonsSingIn/BtnSingInFacebook';
import {
  FormContainer,
  EnterInput,
  ButtonEnter,
  CheckBoxDiv,
  RegisterDiv,
  RegisterLink,
} from './EnterForm.styled';

const EnterForm = () => {
  return (
    <FormContainer>
      <EnterInput type="email" placeholder="Введіть e-mail" />
      <EnterInput type="password" placeholder="Введіть пароль" />
      <CheckBoxDiv>
        <label>
          <input type="checkbox"></input>
          Запам&rsquo;ятати мене
        </label>
        <p>Забули пароль?</p>
      </CheckBoxDiv>
      <ButtonEnter>Увійти</ButtonEnter>
      <BtnSingInGoogle/>
      <BtnSingInFacebook/>
      <RegisterDiv>
        <p>Ще не маєте облікового запису? </p>
        <RegisterLink to='/signup'>Зареєструйтеся!</RegisterLink>
      </RegisterDiv>
    </FormContainer>
  );
};

export default EnterForm;
