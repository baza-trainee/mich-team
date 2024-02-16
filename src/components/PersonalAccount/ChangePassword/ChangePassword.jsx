// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import ComponentAnimate from '../../common/ComponentAnimate';
// import { motion } from 'framer-motion';
// import TextInput from '../../common/TextInput/TextInput';
// import { ButtonCheck, Div, Text, Wrapper } from './ChangePassword.styled';
// import Button from '../../common/Buttons/Button/Button';

// import { ReactComponent as EyeIcon } from '../../../icons/personal-icon/eye.svg';
// import { ReactComponent as EyeSlashIcon } from '../../../icons/personal-icon/eye-slash.svg';
// import { ReactComponent as TickCircleIcon } from '../../../icons/personal-icon/tick-circle.svg';
// import { TitleComponent, WrepperComponent } from '../PersonalAccount.styled';

// const ChangePassword = ({ isopen }) => {
//   const [currentPassword, setCurrentPassword] = useState('');
//   const [repeatPassword, setRepeatPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [showCurrentPassword, setShowCurrentPassword] = useState(true);
//   const [showRepeatPassword, setShowRepeatPassword] = useState(true);
//   const [showNewPassword, setShowNewPassword] = useState(true);
//   const [isDisabled, setIsDisabled] = useState(true);
//   const [passwordChanged, setPasswordChanged] = useState(false);

//   useEffect(() => {
//     if (
//       !currentPassword.length > 0 ||
//       !repeatPassword.length > 0 ||
//       !newPassword.length > 0
//     ) {
//       return setIsDisabled(true);
//     }

//     if (newPassword !== repeatPassword) {
//       setIsDisabled(true);
//       return;
//     }

//     setIsDisabled(false);
//   }, [currentPassword, repeatPassword, newPassword]);

//   useEffect(() => {
//     if (!isopen) setPasswordChanged(false);
//   }, [isopen]);

//   const saveData = () => {
//     console.log({ new_password: newPassword });
//     setPasswordChanged(true);
//     setCurrentPassword('');
//     setRepeatPassword('');
//     setNewPassword('');
//   };

//   return (
//     <WrepperComponent>
//       <TitleComponent>Змінити пароль</TitleComponent>
//       <ComponentAnimate
//         tag={motion.div}
//         status={isopen}
//         variants={{
//           open: { maxHeight: '400px' },
//           closed: { maxHeight: '0px' },
//         }}
//         style={{
//           overflow: 'hidden',
//         }}
//       >
//         <Wrapper>
//           {passwordChanged && (
//             <Div>
//               <TickCircleIcon /> <Text>Пароль успішно змінено</Text>
//             </Div>
//           )}
//           <TextInput
//             id="current_password"
//             type={showCurrentPassword ? 'password' : 'text'}
//             name="currentPassword"
//             value={currentPassword}
//             onChange={e => setCurrentPassword(e.target.value)}
//             label="Введіть актуальний пароль "
//           >
//             <ButtonCheck onClick={() => setShowCurrentPassword(prev => !prev)}>
//               {showCurrentPassword ? <EyeIcon /> : <EyeSlashIcon />}
//             </ButtonCheck>
//           </TextInput>
//           <TextInput
//             id="new_password"
//             type={showNewPassword ? 'password' : 'text'}
//             name="newPassword"
//             value={newPassword}
//             onChange={e => setNewPassword(e.target.value)}
//             label="Введіть новий пароль  "
//           >
//             <ButtonCheck onClick={() => setShowNewPassword(prev => !prev)}>
//               {showNewPassword ? <EyeIcon /> : <EyeSlashIcon />}
//             </ButtonCheck>
//           </TextInput>
//           <TextInput
//             id="repeat_password"
//             type={showRepeatPassword ? 'password' : 'text'}
//             name="repeatPassword"
//             value={repeatPassword}
//             onChange={e => setRepeatPassword(e.target.value)}
//             label="Повторіть новий пароль"
//           >
//             <ButtonCheck onClick={() => setShowRepeatPassword(prev => !prev)}>
//               {showRepeatPassword ? <EyeIcon /> : <EyeSlashIcon />}
//             </ButtonCheck>
//           </TextInput>

//           <Button disabled={isDisabled} type="button" onClick={saveData}>
//             Додати адресу
//           </Button>
//         </Wrapper>
//       </ComponentAnimate>
//     </WrepperComponent>
//   );
// };

// ChangePassword.propTypes = {
//   isopen: PropTypes.bool.isRequired,
// };

// export default ChangePassword;
