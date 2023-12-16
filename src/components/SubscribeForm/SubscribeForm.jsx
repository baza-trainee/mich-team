import React, { useState } from 'react';
import { ReactComponent as MySVG } from '../../icons/arrow-right-footer.svg';
import {
  SubForm,
  FormWrap,
  FormText,
  FormInput,
  FormLabel,
  FormButton,
  getStyledIcon,
} from './SubscribeForm.styled';

const SubscribeForm = stroke => {
  const [email, setEmail] = useState('');
  const SubArrowIcon = getStyledIcon(MySVG, stroke);
  const handleInputChange = e => {
    setEmail(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch('/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        console.log('Subscription successful');
      } else {
        console.error('Subscription failed');
      }
    } catch (error) {
      console.error('Error', error);
    }
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
          <SubArrowIcon />
        </FormButton>
      </SubForm>
    </FormWrap>
  );
};

export default SubscribeForm;
