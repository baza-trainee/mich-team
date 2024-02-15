import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Block,
  ButtonStyled,
  Div,
  ListLinkMobile,
  NavButtonStyled,
  Title,
  WrapperMobile,
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

const Mobile = ({ toogleOpenBackdrop }) => {
  const [myOrders, setMyOrders] = useState(false);
  const [personalData, setPersonalData] = useState(false);
  const [deliveryAddress, setDeliveryAddress] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  return (
    <WrapperMobile>
      <Block>
        <Title>Мій аккаунт </Title>
        <ListLinkMobile>
          <li>
            <NavButtonStyled
              fix={myOrders}
              isopen={myOrders}
              onClick={() => setMyOrders(prev => !prev)}
            >
              <ShoppingBagIcon /> Мої замовлення <ArrowDownIcon />
            </NavButtonStyled>
            <Div>
              <MyOrders isopen={myOrders} />
            </Div>
          </li>
          <li>
            <NavButtonStyled
              isopen={personalData}
              onClick={() => setPersonalData(prev => !prev)}
            >
              <UserIcon /> Особисті дані <ArrowDownIcon />
            </NavButtonStyled>
            <Div>
              <PersonalData isopen={personalData} />
            </Div>
          </li>
          <li>
            <NavButtonStyled
              isopen={deliveryAddress}
              onClick={() => setDeliveryAddress(prev => !prev)}
            >
              <BoxIcon />
              Адреса доставки <ArrowDownIcon />
            </NavButtonStyled>
            <Div>
              <DeliveryAddress isopen={deliveryAddress} />
            </Div>
          </li>
          <li>
            <NavButtonStyled
              isopen={changePassword}
              onClick={() => setChangePassword(prev => !prev)}
            >
              <UnlockIcon />
              Змінити пароль <ArrowDownIcon />
            </NavButtonStyled>

            <Div>
              <ChangePassword isopen={changePassword} />
            </Div>
          </li>
          <li>
            <ButtonStyled onClick={() => toogleOpenBackdrop(prev => !prev)}>
              <LogOutIcon />
              Вийти
            </ButtonStyled>
          </li>
        </ListLinkMobile>
      </Block>
    </WrapperMobile>
  );
};

Mobile.propTypes = {
  toogleOpenBackdrop: PropTypes.func,
};

export default Mobile;
