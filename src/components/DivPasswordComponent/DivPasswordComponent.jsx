import React from "react";
import PropTypes from 'prop-types';
import { DivPasword, LabelInput, RegistInput, ShowIcon } from "./DivPasswordComponent.styled";
import openEye from '../../icons/open-eye.svg';
import closeEye from '../../icons/close-eye.svg';

const DivPasswordComponet = ({ type, titleInput, onChange,onClick, password,value, className  }) => {
    
    return (
        <>
            {(type == "email") ?
            (<DivPasword>
                <RegistInput type={type} placeholder="" />
                <LabelInput>{ titleInput}</LabelInput>
            </DivPasword>):    
            (<DivPasword className={className}>
                <RegistInput type={password ? 'password' : 'text'} placeholder="" onChange={onChange} value={value}></RegistInput>
                <LabelInput>Введіть пароль</LabelInput>
                <ShowIcon src={password ? openEye : closeEye} onClick={onClick} />
            </DivPasword>)
        }  
            
        </>
        
    )
}

DivPasswordComponet.propTypes = {
    type: PropTypes.string.isRequired,
    titleInput: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    password: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
};

export default DivPasswordComponet;