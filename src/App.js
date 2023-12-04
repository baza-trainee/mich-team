import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer.jsx';
import NavRoutes from './Routes';

function App() {
  return (
    <>
      <header></header>
      <main>
        <NavRoutes />
      </main>
      <Footer />
    </>
  );
}

export default App;
