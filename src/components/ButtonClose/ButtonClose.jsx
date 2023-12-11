import PropTypes from 'prop-types';

import React from 'react';
import closeBtn from '../../icons/close.svg';
import { ButtonNavLink, CloseBtn } from './ButtonClose.style';

const ButtonClose = ({propTo}) => {
    return (
        
        <ButtonNavLink to={propTo}><CloseBtn src={closeBtn} alt="closeBtn"></CloseBtn></ButtonNavLink>
    )
}

ButtonClose.propTypes = {
  propTo: PropTypes.string.isRequired,
};

export default ButtonClose;

