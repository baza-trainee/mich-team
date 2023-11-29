import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer.jsx';
import NavRoutes from './Routes';

function App() {
  return (
    <>
      <header>
        <h1
          style={{
            backgroundColor: '#000',
            paddingLeft: '200px',
            color: '#fff',
            paddingTop: '20px',
            paddingBottom: '20px',
          }}
        >
          Header
        </h1>
      </header>
      <main>
        <NavRoutes />
      </main>
      <Footer />
    </>
  );
}

export default App;
