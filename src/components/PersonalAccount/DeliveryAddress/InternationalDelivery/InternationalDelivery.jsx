import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Wrap, WrapInput } from '../DeliveryAddress.styled';
import RadioInput from '../../../common/RadioInput/RadioInput';
import ComponentAnimate from '../../../common/ComponentAnimate';
import { motion } from 'framer-motion';
import CustomSelectInput from '../../../common/CustomSelectInput/CustomSelectInput';
import TextInput from '../../../common/TextInput/TextInput';

const InternationalDelivery = ({
  status,
  selectRadioInput,
  list,
  handleDelivery,
}) => {
  const [countryName, setCountryName] = useState('');
  const [nameStreetNumber, setNameStreetNumber] = useState('');
  const [nameCity, setNameCity] = useState('');
  const [nameState, setNameState] = useState('');
  const [cityIndex, setCityIndex] = useState('');

  useEffect(() => {
    if (!status) {
      setCountryName('');
    }
  }, [status]);

  const getCitieObj = item => {
    setCountryName(item);
  };

  useEffect(() => {
    if (status)
      handleDelivery({
        countryName,
        nameStreetNumber,
        nameCity,
        nameState,
        cityIndex,
      });
  }, [status, countryName, nameStreetNumber, nameCity, nameState, cityIndex]);

  return (
    <Wrap status={status}>
      <RadioInput
        type="radio"
        name="delivery"
        value="Міжнародна доставка"
        onChange={selectRadioInput}
        label=" Міжнародна доставка"
        checked={status}
      />
      <ComponentAnimate
        tag={motion.div}
        status={status}
        variants={{
          open: { maxHeight: '400px', opacity: 1 },
          closed: { maxHeight: '0px', opacity: 0 },
        }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        <CustomSelectInput
          list={list}
          label="Оберіть країну *"
          value={countryName}
          updateCountry={e => getCitieObj(e)}
        />
        <TextInput
          id="international_name_street_number"
          type="text"
          name="nameStreetNumber"
          value={nameStreetNumber}
          onChange={e => setNameStreetNumber(e.target.value)}
          label="Введіть номер будинку і назву вулиці"
        />
        <WrapInput>
          <TextInput
            id="international_nameCity"
            type="text"
            name="nameCity"
            value={nameCity}
            onChange={e => setNameCity(e.target.value)}
            label="Місто *"
          />
          <TextInput
            id="international_nameState"
            type="text"
            name="nameState"
            value={nameState}
            onChange={e => setNameState(e.target.value)}
            label="Штат"
          />
          <TextInput
            id="international_cityIndex"
            type="number"
            name="cityIndex"
            value={cityIndex}
            onChange={e => setCityIndex(e.target.value)}
            label="Індекс"
          />
        </WrapInput>
      </ComponentAnimate>
    </Wrap>
  );
};

InternationalDelivery.propTypes = {
  status: PropTypes.bool,
  selectRadioInput: PropTypes.func,
  handleDelivery: PropTypes.func,
  list: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.array,
  ]),
};

export default InternationalDelivery;
