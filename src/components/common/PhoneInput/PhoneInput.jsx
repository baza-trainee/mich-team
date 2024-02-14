import React from 'react';
import PropTypes from 'prop-types';
import { DivStyle, InputStyled } from './PhoneInput.styled';
import CustomSelect from './CustomSelect';

/*
 countries має приходити з бекенду,
 або маємо обновити країни
 */
import { countries } from './countries';

const PhoneInput = ({
  type,
  name,
  value,
  onChange,
  countryFn,
  checkNewCountry,
}) => {
  return (
    <DivStyle lengthValue={value.length > 0}>
      <CustomSelect
        updateCountry={countryFn}
        checkNewCountry={checkNewCountry}
        countries={countries}
      />
      <InputStyled type={type} name={name} value={value} onChange={onChange} />
    </DivStyle>
  );
};

PhoneInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  countryFn: PropTypes.func.isRequired,
  checkNewCountry: PropTypes.func.isRequired,
};

export default PhoneInput;
