import React, { useState } from 'react';
import { ReactComponent as MySVG } from '../../icons/arrow-right-footer.svg';
import {
  SubForm,
  FormWrap,
  FormText,
  FormInput,
  FormLabel,
  FormButton,
} from './SubscribeForm.styled';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = e => {
    setEmail(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Subscribing with email:', email);
    setEmail('');
  };

  return (
    <FormWrap>
      <FormText> Підпишись на наші оновлення</FormText>
      <SubForm onSubmit={handleSubmit}>
        <FormLabel htmlFor="email"></FormLabel>
        <FormInput
          type="email"
          id="email"
          value={email}
          onChange={handleInputChange}
          placeholder="E-mail"
          required
        />
        <FormButton type="submit">
          <MySVG />
        </FormButton>
      </SubForm>
    </FormWrap>
  );
};

export default SubscribeForm;
