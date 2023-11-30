import React, { useState } from 'react';
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
      <FormText>ПІДПИШИСЬ НА НАШІ ОНОВЛЕННЯ</FormText>
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
        <FormButton type="submit">---</FormButton>
      </SubForm>
    </FormWrap>
  );
};

export default SubscribeForm;
