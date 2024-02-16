// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import ComponentAnimate from '../../common/ComponentAnimate';
// import { motion } from 'framer-motion';
// import { Div, FormStyled } from './DeliveryAddress.styled';

// /*
//  countries має приходити з бекенду,
//  або маємо обновити країни
//  */
// import { countries, cityes, address } from './info-list';

// import NovaPoshta from './NovaPoshta/NovaPoshta';
// import NovaPoshtaAddress from './NovaPoshtaAddress/NovaPoshtaAddress';
// import UkrPoshta from './UkrPoshta/UkrPoshta';
// import UkrPoshtaAddress from './UkrPoshtaAddress/UkrPoshtaAddress';
// import InternationalDelivery from './InternationalDelivery/InternationalDelivery';
// import Button from '../../common/Buttons/Button/Button';
// import PersonalAddresses from './PersonalAddresses/PersonalAddresses';
// import { TitleComponent, WrepperComponent } from '../PersonalAccount.styled';

// const DeliveryAddress = ({ isopen }) => {
//   const [checkedOptions, setCheckedOptions] = useState({
//     nova_poshta_branch: false,
//     nova_poshta_address: false,
//     ukrposhta: false,
//     ukrposhta_address: false,
//     international: false,
//   });

//   const [delivery, seDelivery] = useState({});
//   const [isDisabled, setIsDisabled] = useState(true);

//   useEffect(() => {
//     const values = Object.values(delivery);
//     const check = values.includes('') || !values.length > 0;
//     setIsDisabled(check);
//   }, [delivery]);

//   const checkedInput = newCheck => {
//     setCheckedOptions({
//       nova_poshta_branch: newCheck === 'nova_poshta_branch',
//       nova_poshta_address: newCheck === 'nova_poshta_address',
//       ukrposhta: newCheck === 'ukrposhta',
//       ukrposhta_address: newCheck === 'ukrposhta_address',
//       international: newCheck === 'international',
//     });
//   };

//   const handleDelivery = e => {
//     seDelivery(e);
//   };

//   const saveData = () => {
//     console.log(delivery);
//   };

//   return (
//     <WrepperComponent>
//       <TitleComponent>Адреса доставки</TitleComponent>
//       <ComponentAnimate
//         tag={motion.div}
//         status={isopen}
//         variants={{
//           open: { maxHeight: '1100px' },
//           closed: { maxHeight: '0px' },
//         }}
//         transition={{
//           duration: 0.3,
//           ease: 'linear',
//         }}
//         style={{
//           overflow: 'hidden',
//         }}
//       >
//         <FormStyled>
//           {address.length > 0 && <PersonalAddresses list={address} />}

//           <Div>
//             <NovaPoshta
//               status={checkedOptions.nova_poshta_branch}
//               selectRadioInput={() => checkedInput('nova_poshta_branch')}
//               list={cityes}
//               handleDelivery={e => handleDelivery(e)}
//             />
//             <NovaPoshtaAddress
//               status={checkedOptions.nova_poshta_address}
//               selectRadioInput={() => checkedInput('nova_poshta_address')}
//               list={cityes}
//               handleDelivery={e => handleDelivery(e)}
//             />
//             <UkrPoshtaAddress
//               status={checkedOptions.ukrposhta_address}
//               selectRadioInput={() => checkedInput('ukrposhta_address')}
//               list={cityes}
//               handleDelivery={e => handleDelivery(e)}
//             />
//             <UkrPoshta
//               status={checkedOptions.ukrposhta}
//               selectRadioInput={() => checkedInput('ukrposhta')}
//               list={cityes}
//               handleDelivery={e => handleDelivery(e)}
//             />
//             <InternationalDelivery
//               status={checkedOptions.international}
//               selectRadioInput={() => checkedInput('international')}
//               list={countries}
//               handleDelivery={e => handleDelivery(e)}
//             />
//             <Button disabled={isDisabled} type="button" onClick={saveData}>
//               Додати адресу
//             </Button>
//           </Div>
//         </FormStyled>
//       </ComponentAnimate>
//     </WrepperComponent>
//   );
// };

// DeliveryAddress.propTypes = {
//   isopen: PropTypes.bool.isRequired,
// };

// export default DeliveryAddress;
