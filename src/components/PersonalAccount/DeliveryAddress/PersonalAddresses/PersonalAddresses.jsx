import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RadioInput from '../../../common/RadioInput/RadioInput';

import { ReactComponent as DeleteIcon } from '../../../../icons/personal-icon/trash.svg';
import { ListStyle, ButtonDelete, Item } from './PersonalAddresses.styled';

const PersonalAddresses = ({ list }) => {
  const [checkInput, setCheckInput] = useState(1);

  return (
    <ListStyle>
      {list.map(
        ({ lastname, id, surname, region, city_name, branch, phone }) => {
          return (
            <Item key={id}>
              <RadioInput
                type="radio"
                name="delivery_personal_addresses"
                value={`${region}, ${city_name} ${branch} ${phone}`}
                onChange={() => setCheckInput(id)}
                label={lastname + surname}
                checked={id === checkInput}
              />
              <p>
                {`${region}, ${city_name} ${branch}`} <br />
                {phone}
              </p>

              <ButtonDelete
                type="button"
                onClick={() =>
                  console.log(
                    'The address deletion function is not implemented'
                  )
                }
              >
                <DeleteIcon />
                Видалити
              </ButtonDelete>
            </Item>
          );
        }
      )}
    </ListStyle>
  );
};

PersonalAddresses.propTypes = {
  list: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.array,
  ]),
};

export default PersonalAddresses;
