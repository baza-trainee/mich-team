import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer.jsx';
import NavRoutes from './Routes';
import Header from './components/Header/Header.jsx';
import { useLocation } from 'react-router';
import CustomScrollbar from './components/ScrollBar/ScroolBar.jsx';

function App() {
  const location = useLocation();
  return (
    <CustomScrollbar>
      <Header currentPage={location.pathname} />
      <main>
        <NavRoutes />
      </main>
      <Footer />
    </CustomScrollbar>
  );
}

export default App;
