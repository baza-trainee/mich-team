import React from 'react';
import SubscribeForm from '../SubscribeForm/SubscribeForm';
import { StyledLink } from './Footer.styled';

const Footer = () => {
  return (
      <div className="container">
      <img
        src="../../images/footer-logo.png"
        alt="Логотип бригади"
        width="119"
        height="136" />
      <nav className='footer-nav'>
        <StyledLink to="/merch">МЕРЧ</StyledLink>
        <StyledLink to="">ДОСТАВКА І ОПЛАТА</StyledLink>
        <StyledLink to="">ОБМІН І ПОВЕРНЕННЯ</StyledLink>
        <a href='' target="_blank" rel="noopener noreferrer">mich_team</a>
 <a href="mailto:mich_team@gmail.com">mich_team@gmail.com</a>
      <StyledLink to="">ПАРТНЕРИ</StyledLink>
      </nav>
      <SubscribeForm />
    </div>
  );
};

export default Footer;
