import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { FlexStyle, Wrap } from '../DeliveryAddress.styled';
import RadioInput from '../../../common/RadioInput/RadioInput';
import ComponentAnimate from '../../../common/ComponentAnimate';
import CustomSelectInput from '../../../common/CustomSelectInput/CustomSelectInput';
import TextInput from '../../../common/TextInput/TextInput';

const NovaPoshtaAddress = ({
  status,
  selectRadioInput,
  list,
  handleDelivery,
}) => {
  const [citiesName, setCitiesName] = useState('');
  const [addressDelivery, setAddressDelivery] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [apartmentNumber, setApartmentNumber] = useState('');

  useEffect(() => {
    if (!status) {
      setCitiesName('');
      setAddressDelivery('');
      setHouseNumber('');
      setApartmentNumber('');
    }
  }, [status]);

  const getCitieObj = item => {
    setCitiesName(item);
  };

  useEffect(() => {
    if (status)
      handleDelivery({
        citiesName,
        addressDelivery,
        houseNumber,
        apartmentNumber,
      });
  }, [status, citiesName, addressDelivery, houseNumber, apartmentNumber]);

  return (
    <Wrap>
      <RadioInput
        name="delivery"
        value="Нова Пошта (на адресу)"
        onChange={selectRadioInput}
        checked={status}
        label="Нова Пошта (на адресу)"
      />
      <ComponentAnimate
        tag={motion.div}
        status={status}
        variants={{
          open: { maxHeight: '400px', opacity: 1, marginTop: '24px' },
          closed: { maxHeight: '0px', opacity: 0, marginTop: 0 },
        }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        <CustomSelectInput
          list={list}
          label="Оберіть місто"
          value={citiesName}
          updateCountry={e => getCitieObj(e)}
        />
        <TextInput
          id="nova_poshta_addressDelivery"
          type="text"
          name="address_delivery"
          value={addressDelivery}
          onChange={e => setAddressDelivery(e.target.value)}
          label="Введіть назву вулиці"
        />
        <FlexStyle>
          <TextInput
            id="nova_poshta_houseNumber"
            type="number"
            name="houseNumber"
            value={houseNumber}
            onChange={e => setHouseNumber(e.target.value)}
            label="№ Будинку"
          />
          <TextInput
            id="nova_poshta_apartmentNumber"
            type="number"
            name="apartmentNumber"
            value={apartmentNumber}
            onChange={e => setApartmentNumber(e.target.value)}
            label="№ Квартири"
          />
        </FlexStyle>
      </ComponentAnimate>
    </Wrap>
  );
};

NovaPoshtaAddress.propTypes = {
  status: PropTypes.bool,
  selectRadioInput: PropTypes.func,
  handleDelivery: PropTypes.func,
  list: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.array,
  ]),
};

export default NovaPoshtaAddress;
