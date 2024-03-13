import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  getStyledIcon,
  StyledMenu,
  MenuButtonsWrapper,
  Instagram,
  NavWrapper,
  AuthorizationWrapper,
  AuthorizationLink,
  SubscribeWrapper,
} from './BurgerMenu.styled';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { Navigation } from '../Navigation/Navigatiom';
import { ReactComponent as InstIcon } from '../../../icons/inst.svg';
import SubscribeForm from '../../SubscribeForm/SubscribeForm';
import { ModalCloseBtn } from '../ModalCloseBtn/ModalCloseBtn';
const InstagramIcon = getStyledIcon(InstIcon);

export const Menu = ({ open, setOpen, currentPage }) => {
  const openMenu = event => {
    event.preventDefault();
    setOpen(!open);
  };
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else if (!open) {
      document.body.style.overflow = '';
    }
  }, [open]);
  useEffect(() => {
    setOpen(false);
  }, [currentPage]);
  return (
    <StyledMenu open={!open}>
      <MenuButtonsWrapper>
        <ModalCloseBtn close={openMenu} />
        <LanguageSwitcher
          arrowcolor={'#0F0000'}
          backgroundcolorlanghover={'rgba(0, 0, 0, 0.60)'}
          textcolorlanghover={'#FEFEFE'}
        />
      </MenuButtonsWrapper>
      <NavWrapper>
        <Navigation />
        <AuthorizationWrapper>
          <AuthorizationLink
            href="/signup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Реєстрація
          </AuthorizationLink>
          <AuthorizationLink
            href="/signin"
            target="_blank"
            rel="noopener noreferrer"
          >
            Увійти
          </AuthorizationLink>
        </AuthorizationWrapper>
        <Instagram
          href="https://instagram.com/mich_team?igshid=MzMyNGUyNmU2YQ=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
          mich_team
        </Instagram>
      </NavWrapper>
      <SubscribeWrapper>
        <SubscribeForm stroke={'#0F0000'} />
      </SubscribeWrapper>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  currentPage: PropTypes.string,
};
