import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <lable htmlFor="email">ПІДПИШИСЬ НА НАШІ ОНОВЛЕННЯ</lable>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleInputChange}
        placeholder="E-mail"
        required
      />
      <button type="submit">!!!</button>
    </form>
  );
};

export default SubscribeForm;
