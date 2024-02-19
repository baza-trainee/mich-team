import React, { Suspense } from 'react';
import { useLocation } from 'react-router';
import { Outlet } from 'react-router-dom';
import CustomScrollBar from '../common/CustomScrollBar';
import Loader from '../Loader/Loader.jsx';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import { Main } from './SharedLayout.styled.jsx';

const SharedLayout = () => {
  const location = useLocation();

  return (
    <CustomScrollBar
      thumbColor="rgba(54, 48, 34, 0.5)"
      trackColor="rgba(239, 239, 239, 0.5)"
    >
      <Header currentPage={location.pathname} />
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer />
    </CustomScrollBar>
  );
};

export default SharedLayout;
