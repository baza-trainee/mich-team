import React, { useState } from 'react';
import BtnSingInGoogle from '../ButtonsSingIn/BtnSingInGoogle';
import BtnSingInFacebook from '../ButtonsSingIn/BtnSingInFacebook';
import openEye from '../../icons/open-eye.svg';
import closeEye from '../../icons/close-eye.svg';
import {
  FormContainer,
  EnterInput,
  ButtonEnter,
  CheckBoxDiv,
  RegisterDiv,
  RegisterLink,
  LinesDiv,
  LineHr,
  EyeIcon,
} from './EnterForm.styled';

const EnterForm = () => {
  const [password, setPassword] = useState(true);

  return (
    <FormContainer>
      <EnterInput type="email" placeholder="Введіть e-mail" />
      <EnterInput
        type={password ? 'password' : 'text'}
        placeholder="Введіть пароль"
      />
      <EyeIcon
        src={password ? openEye : closeEye}
        alt="eye"
        onClick={() => setPassword(!password)}
      />
      <CheckBoxDiv>
        <label htmlFor="remember">
          <input id="remember" type="checkbox"></input>
          Запам&rsquo;ятати мене
        </label>
        <p>Забули пароль?</p>
      </CheckBoxDiv>
      <ButtonEnter>Увійти</ButtonEnter>
      <LinesDiv>
        <LineHr />
        <p>або</p>
        <LineHr />
      </LinesDiv>
      <BtnSingInGoogle />
      <BtnSingInFacebook />
      <RegisterDiv>
        <p>Ще не маєте облікового запису? </p>
        <RegisterLink to="/signup">Зареєструйтеся!</RegisterLink>
      </RegisterDiv>
    </FormContainer>
  );
};

export default EnterForm;
