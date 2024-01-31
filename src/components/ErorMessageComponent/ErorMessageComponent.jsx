import React from "react";
import errorSvg from '../../icons/info-circle.svg';
import { ErorMessageDiv, ErrorIcon, ErrorMessage } from "./ErorMessageComponent.styled";
import PropTypes from 'prop-types';

const ErorMessageComponent = ({message}) => {
    return <ErorMessageDiv>
        <ErrorIcon src={errorSvg} />
        <ErrorMessage>{ message}</ErrorMessage>
   </ErorMessageDiv>
}

ErorMessageComponent.propTypes = {
    message: PropTypes.string.isRequired,
    
};

export default ErorMessageComponent;