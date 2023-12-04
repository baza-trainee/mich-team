import React from 'react';
import SubscribeForm from '../SubscribeForm/SubscribeForm';
import { ReactComponent as MySVG } from '../../icons/footer-logo.svg';

import {
  StyledLink,
  FooterNav,
  StyledFooter,
  FooterContainer,
  FooterLink,
  TextWrap,
  FooterList,
  TextConfid,
  Link,
} from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <div>
          <MySVG />
        </div>
        <FooterNav>
          <StyledLink to="/merch">МЕРЧ</StyledLink>
          <StyledLink to="/">ДОСТАВКА І ОПЛАТА</StyledLink>
          <StyledLink to="/">ОБМІН І ПОВЕРНЕННЯ</StyledLink>
        </FooterNav>
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
        <StyledLink to="/">ПАРТНЕРИ</StyledLink>

        <SubscribeForm />
        <TextWrap>
          <TextConfid>
            Розробка Baza Trainee Ukraine 2023 @ Усі права захищені
          </TextConfid>
          <FooterList>
            <li>
              <Link href="">Політика конфіденційності</Link>
            </li>
            <li>
              <Link href="">Правила користування сайтом</Link>
            </li>
          </FooterList>
        </TextWrap>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
