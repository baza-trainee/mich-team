import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer.jsx';
import NavRoutes from './Routes';
import Header from './components/Header/Header.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <NavRoutes />
      </main>
      <Footer />
    </>
  );
}

export default App;
