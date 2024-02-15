import React, { useState } from 'react';
import Mobile from './Mobile';
import Desktop from './Desktop';
import Backdrop from '../common/Backdrop/Backdrop';
import ModalExit from './ModalExit/ModalExit';

const PersonalAccount = () => {
  const [isOpenBackdrop, setIsOpenBackdrop] = useState(false);
  return (
    <>
      <Mobile toogleOpenBackdrop={setIsOpenBackdrop} />
      <Desktop toogleOpenBackdrop={setIsOpenBackdrop} />
      <Backdrop isopen={isOpenBackdrop}>
        <ModalExit toogleOpenBackdrop={setIsOpenBackdrop} />
      </Backdrop>
    </>
  );
};

export default PersonalAccount;
