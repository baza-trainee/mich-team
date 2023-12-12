import React from "react";
import PropTypes from 'prop-types';
import { BtnSignIn } from "./BtnSign.styles";

const BtnSign = ({onClick, title}) => {
    return (
        <BtnSignIn onClick={onClick} type="submit">{ title}</BtnSignIn>
    )
}


BtnSign.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default BtnSign;