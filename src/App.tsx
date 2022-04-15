import React from 'react';
import { BrowserRouter } from 'react-router-dom';

/* Components */
import AllRoutes from './components/AllRoutes';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Navbar></Navbar>
      <main>
        <AllRoutes></AllRoutes>
      </main>
    </BrowserRouter>
  );
};

export default App;
