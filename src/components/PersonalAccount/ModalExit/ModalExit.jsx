import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Icon, Text, Title, WrapperBtn } from './ModalExit.styled';
import ButtonNoExit from '../../common/Buttons/ButtonNoExit/ButtonNoExit';
import ButtonExit from '../../common/Buttons/ButtonExit/ButtonExit';
import { useNavigate } from 'react-router-dom';

const ModalExit = ({ toogleOpenBackdrop }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Icon />
      <Title>Вийти</Title>
      <Text>Чи дійсно ви бажаєте завершити сеанс?</Text>
      <WrapperBtn>
        <ButtonExit onClick={() => navigate('/')}>Так, вийти</ButtonExit>
        <ButtonNoExit onClick={() => toogleOpenBackdrop(prev => !prev)}>
          Ні, залишитися
        </ButtonNoExit>
      </WrapperBtn>
    </Wrapper>
  );
};

ModalExit.propTypes = {
  toogleOpenBackdrop: PropTypes.func,
};

export default ModalExit;
