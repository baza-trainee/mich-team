// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import ComponentAnimate from '../../common/ComponentAnimate';
// import { motion } from 'framer-motion';
// import { FormStyled, Title, WrapperTitle } from './PersonalData.styled';
// import TextInput from '../../common/TextInput/TextInput';
// import PhoneInput from '../../common/PhoneInput/PhoneInput';
// import Button from '../../common/Buttons/Button/Button';

// const PersonalData = ({ isopen }) => {
//   const [name, setName] = useState('Анна');
//   const [lastname, setLastname] = useState('Коваленко');
//   const [email, setEmail] = useState('annakovalenko@gmail.com');
//   const [phone, setPhone] = useState('677857143');
//   const [countryNumbers, setCountryNumbers] = useState('UA +380');
//   const [isDataChanged, setIsDataChanged] = useState(false);

//   const handleInputChange = (setter, value, name) => {
//     console.log({ [name]: value });
//     setter(value);
//     setIsDataChanged(true);
//   };

//   const handleSaveChanges = () => {
//     setIsDataChanged(false);
//     console.log({ name, lastname, email, phone: countryNumbers + phone });
//   };

//   return (
//     <ComponentAnimate
//       tag={motion.div}
//       status={isopen}
//       variants={{
//         open: { maxHeight: '500px' },
//         closed: { maxHeight: '0px' },
//       }}
//       transition={{
//         duration: 0.3,
//         ease: 'linear',
//       }}
//       style={{
//         overflow: 'hidden',
//         overflowY: 'scroll',
//       }}
//     >
//       <div style={{ position: 'relative' }}>
//         <WrapperTitle>
//           <Title>Особисті дані</Title>
//         </WrapperTitle>
//         <FormStyled>
//           <TextInput
//             id="name-personal"
//             type="text"
//             name="name"
//             value={name}
//             onChange={e => handleInputChange(setName, e.target.value, 'name')}
//             label="Введіть ім’я"
//           />
//           <TextInput
//             id="lastname-personal"
//             type="text"
//             name="lastname"
//             value={lastname}
//             onChange={e =>
//               handleInputChange(setLastname, e.target.value, 'lastname')
//             }
//             label="Введіть прізвище"
//           />
//           <TextInput
//             id="email-personal"
//             type="email"
//             name="email"
//             value={email}
//             onChange={e => handleInputChange(setEmail, e.target.value, 'email')}
//             label="Введіть e-mail"
//           />
//           <PhoneInput
//             type="text"
//             name="phone"
//             value={phone}
//             onChange={e => handleInputChange(setPhone, e.target.value, 'phone')}
//             countryFn={setCountryNumbers}
//             checkNewCountry={() => setIsDataChanged(true)}
//           />

//           <Button
//             disabled={!isDataChanged}
//             type="button"
//             onClick={handleSaveChanges}
//           >
//             Зберегти зміни
//           </Button>
//         </FormStyled>
//       </div>
//     </ComponentAnimate>
//   );
// };

// PersonalData.propTypes = {
//   isopen: PropTypes.bool.isRequired,
// };

// export default PersonalData;
