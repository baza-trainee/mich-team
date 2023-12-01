import React from 'react';
import {
  FormContainer,
  EnterInput,
  ButtonEnter,
  CheckBoxDiv,
  BtnWithGoogle,
  BtnWithFacebook,
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
      <BtnWithGoogle>Увійти за допомогою Google</BtnWithGoogle>
      <BtnWithFacebook>Увійти за допомогою facebook</BtnWithFacebook>
      <RegisterDiv>
        <p>Ще не маєте облікового запису? </p>
        <RegisterLink to='/signup'>Зареєструйтеся!</RegisterLink>
      </RegisterDiv>
    </FormContainer>
  );
};

export default EnterForm;
