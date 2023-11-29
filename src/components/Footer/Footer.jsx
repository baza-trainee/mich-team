import React from 'react';
import SubscribeForm from '../SubscribeForm/SubscribeForm';
import {
  StyledLink,
  FooterNav,
  StyledFooter,
  FooterLogo,
  FooterContainer,
  FooterLink,
} from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <FooterLogo
          src="../../images/footer-logo.png"
          alt="Логотип бригади"
          width="119"
          height="136"
        />
        <FooterNav>
          <StyledLink to="/merch">МЕРЧ</StyledLink>
          <StyledLink to="">ДОСТАВКА І ОПЛАТА</StyledLink>
          <StyledLink to="">ОБМІН І ПОВЕРНЕННЯ</StyledLink>
          <FooterLink
            href="https://instagram.com/mich_team?igshid=MzMyNGUyNmU2YQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            mich_team
          </FooterLink>
          <FooterLink href="mailto:mich_team@gmail.com">
            mich_team@gmail.com
          </FooterLink>
          <StyledLink to="">ПАРТНЕРИ</StyledLink>
        </FooterNav>
        <SubscribeForm />
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
