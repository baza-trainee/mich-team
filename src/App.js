import React from 'react';
import './App.css';
import NavRoutes from './Routes';

function App() {
  return (
    <>
      <header>
        <h1>Header</h1>
      </header>
      <main>
        <NavRoutes />
      </main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  );
}

export default App;
