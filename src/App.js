import React from 'react';
import './App.css';
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
      <footer>
        <h1
          style={{
            backgroundColor: '#000',
            paddingLeft: '200px',
            color: '#fff',
            alignSelf: 'center',
            paddingTop: '20px',
            paddingBottom: '20px',
          }}
        >
          Footer
        </h1>
      </footer>
    </>
  );
}

export default App;
