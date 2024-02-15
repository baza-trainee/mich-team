import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { FlexStyle, Wrap } from '../DeliveryAddress.styled';
import RadioInput from '../../../common/RadioInput/RadioInput';
import ComponentAnimate from '../../../common/ComponentAnimate';
import CustomSelectInput from '../../../common/CustomSelectInput/CustomSelectInput';
import TextInput from '../../../common/TextInput/TextInput';

const UkrPoshtaAddress = ({
  status,
  selectRadioInput,
  list,
  handleDelivery,
}) => {
  const [citiesName, setCitiesName] = useState('');
  const [addressDelivery, setAddressDelivery] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [cityIndex, setCityIndex] = useState('');

  useEffect(() => {
    if (!status) {
      setCitiesName('');
      setAddressDelivery('');
      setHouseNumber('');
      setCityIndex('');
    }
  }, [status]);

  const getCitieObj = item => {
    setCitiesName(item);
  };

  useEffect(() => {
    if (status)
      handleDelivery({ citiesName, addressDelivery, houseNumber, cityIndex });
  }, [status, citiesName, addressDelivery, houseNumber, cityIndex]);
  return (
    <Wrap>
      <RadioInput
        name="delivery"
        value="Укрпошта (на адресу) "
        onChange={selectRadioInput}
        checked={status}
        label="Укрпошта (на адресу) "
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
          id="ukrposhta_addressDelivery"
          type="text"
          name="address_delivery"
          value={addressDelivery}
          onChange={e => setAddressDelivery(e.target.value)}
          label="Введіть назву вулиці"
        />
        <FlexStyle>
          <TextInput
            id="ukrposhta_houseNumber"
            type="number"
            name="houseNumber"
            value={houseNumber}
            onChange={e => setHouseNumber(e.target.value)}
            label="№ Будинку"
          />
          <TextInput
            id="ukrposhta_cityIndex"
            type="number"
            name="cityIndex"
            value={cityIndex}
            onChange={e => setCityIndex(e.target.value)}
            label="Індекс"
          />
        </FlexStyle>
      </ComponentAnimate>
    </Wrap>
  );
};

UkrPoshtaAddress.propTypes = {
  status: PropTypes.bool,
  selectRadioInput: PropTypes.func,
  handleDelivery: PropTypes.func,
  list: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.array,
  ]),
};

export default UkrPoshtaAddress;
