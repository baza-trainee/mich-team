import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import ComponentAnimate from '../../../common/ComponentAnimate';
import { Wrap } from '../DeliveryAddress.styled';
import RadioInput from '../../../common/RadioInput/RadioInput';
import CustomSelectInput from '../../../common/CustomSelectInput/CustomSelectInput';

const NovaPoshta = ({ status, selectRadioInput, list, handleDelivery }) => {
  const [citiesName, setCitiesName] = useState('');
  const [branch, setBranch] = useState('');
  const [branchList, setBranchList] = useState([]);

  useEffect(() => {
    if (!status) {
      setBranchList([]);
      setBranch('');
      setCitiesName('');
    }
  }, [status]);

  const getCitieObj = item => {
    setCitiesName(item);
    setBranch('');

    setCitiesName(prevCitiesName => {
      const selectedCity = list.find(city => city.name === prevCitiesName);
      if (selectedCity) {
        setBranchList(selectedCity.branch);
      } else {
        setBranchList([]);
      }
      return prevCitiesName;
    });
  };

  useEffect(() => {
    if (status)
      handleDelivery({
        citiesName,
        branch,
      });
  }, [status, citiesName, branch]);

  return (
    <Wrap status={status}>
      <RadioInput
        id="nova_poshta_branch"
        name="delivery"
        value="Нова Пошта (відділення)"
        onChange={selectRadioInput}
        label="Нова Пошта (відділення)"
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
          label="Оберіть місто"
          value={citiesName}
          updateCountry={e => getCitieObj(e)}
        />
        <CustomSelectInput
          list={branchList}
          label="Оберіть відділення"
          value={branch}
          updateCountry={setBranch}
        />
      </ComponentAnimate>
    </Wrap>
  );
};

NovaPoshta.propTypes = {
  status: PropTypes.bool,
  selectRadioInput: PropTypes.func,
  handleDelivery: PropTypes.func,
  list: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.array,
  ]),
};

export default NovaPoshta;
