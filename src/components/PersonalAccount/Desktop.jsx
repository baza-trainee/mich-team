import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Block,
  ButtonStyled,
  DivInfo,
  ListLinkDesktop,
  NavButtonStyled,
  Title,
  WrapperDesktop,
} from './PersonalAccount.styled';

import { ReactComponent as ShoppingBagIcon } from '../../icons/personal-icon/shopping-bag.svg';
import { ReactComponent as UserIcon } from '../../icons/personal-icon/user.svg';
import { ReactComponent as BoxIcon } from '../../icons/personal-icon/box.svg';
import { ReactComponent as UnlockIcon } from '../../icons/personal-icon/unlock.svg';
import { ReactComponent as LogOutIcon } from '../../icons/personal-icon/logout.svg';
import { ReactComponent as ArrowDownIcon } from '../../icons/personal-icon/arrow-down.svg';
import MyOrders from './MyOrders/MyOrders';
import PersonalData from './PersonalData/PersonalData';
import DeliveryAddress from './DeliveryAddress/DeliveryAddress';
import ChangePassword from './ChangePassword/ChangePassword';
import NavigationMenu from './NavigationMenu/NavigationMenu';

const Desktop = ({ toogleOpenBackdrop }) => {
  const [activeComponent, setActiveComponent] = useState('my-orders');
  const [nameBlock, setNameBlock] = useState('Мої замовлення');

  useEffect(() => {
    switch (activeComponent) {
      case 'my-orders':
        setNameBlock('Мої замовлення');
        break;
      case 'personal-data':
        setNameBlock('Особисті дані');
        break;
      case 'delivery-address':
        setNameBlock('Адреса доставки');
        break;
      case 'change-password':
        setNameBlock('Змінити пароль');
        break;
    }
  }, [activeComponent]);

  return (
    <>
      <NavigationMenu text={nameBlock} />

      <WrapperDesktop>
        <Block>
          <Title>Мій аккаунт </Title>
          <ListLinkDesktop>
            <li>
              <NavButtonStyled
                isopen={activeComponent === 'my-orders'}
                onClick={() => setActiveComponent('my-orders')}
              >
                <ShoppingBagIcon /> Мої замовлення <ArrowDownIcon />
              </NavButtonStyled>
            </li>
            <li>
              <NavButtonStyled
                isopen={activeComponent === 'personal-data'}
                onClick={() => setActiveComponent('personal-data')}
              >
                <UserIcon /> Особисті дані <ArrowDownIcon />
              </NavButtonStyled>
            </li>
            <li>
              <NavButtonStyled
                isopen={activeComponent === 'delivery-address'}
                onClick={() => setActiveComponent('delivery-address')}
              >
                <BoxIcon />
                Адреса доставки <ArrowDownIcon />
              </NavButtonStyled>
            </li>
            <li>
              <NavButtonStyled
                isopen={activeComponent === 'change-password'}
                onClick={() => setActiveComponent('change-password')}
              >
                <UnlockIcon />
                Змінити пароль <ArrowDownIcon />
              </NavButtonStyled>
            </li>
            <li>
              <ButtonStyled onClick={() => toogleOpenBackdrop(prev => !prev)}>
                <LogOutIcon />
                Вийти
              </ButtonStyled>
            </li>
          </ListLinkDesktop>
        </Block>

        <DivInfo address={true} isopen={activeComponent === 'my-orders'}>
          <MyOrders isopen={activeComponent === 'my-orders'} />
        </DivInfo>
        <DivInfo isopen={activeComponent === 'personal-data'}>
          <PersonalData isopen={activeComponent === 'personal-data'} />
        </DivInfo>
        <DivInfo address={true} isopen={activeComponent === 'delivery-address'}>
          <DeliveryAddress isopen={activeComponent === 'delivery-address'} />
        </DivInfo>
        <DivInfo isopen={activeComponent === 'change-password'}>
          <ChangePassword isopen={activeComponent === 'change-password'} />
        </DivInfo>
      </WrapperDesktop>
    </>
  );
};

Desktop.propTypes = {
  toogleOpenBackdrop: PropTypes.func,
};

export default Desktop;
