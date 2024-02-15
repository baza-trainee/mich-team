import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { List, Text } from './MyOrders.styled';
import ItemComponent from './Item';

import ComponentAnimate from '../../common/ComponentAnimate';
import { TitleComponent, WrepperComponent } from '../PersonalAccount.styled';

const MyOrders = ({ isopen }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <WrepperComponent>
      <TitleComponent>Замовлення</TitleComponent>
      {false && <Text>У вас ще немає замовлень</Text>}
      <ComponentAnimate
        tag={List}
        status={isopen}
        variants={{
          open: { maxHeight: isOpen ? '1200px' : '150px' },
          closed: { maxHeight: '0px' },
        }}
        transition={{
          duration: 0.5,
          ease: 'linear',
        }}
        style={{
          overflow: 'scroll',
        }}
      >
        <ItemComponent
          isopen={isOpen}
          fn={() => setIsOpen(prevIsOpen => !prevIsOpen)}
        />
      </ComponentAnimate>
    </WrepperComponent>
  );
};

MyOrders.propTypes = {
  isopen: PropTypes.bool.isRequired,
};

export default MyOrders;
