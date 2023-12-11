import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer.jsx';
import NavRoutes from './Routes';
import Header from './components/Header/Header.jsx';
import { useLocation } from 'react-router';

function App() {
  const location = useLocation();
  return (
    <>
      <Header currentPage={location.pathname} />
      <main>
        <NavRoutes />
      </main>
      <Footer />
    </>
  );
}

export default App;
