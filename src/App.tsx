import React from 'react';
import { BrowserRouter } from 'react-router-dom';

/* Components */
import AllRoutes from './components/AllRoutes';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Navbar></Navbar>
        <AllRoutes></AllRoutes>
      </BrowserRouter>
    </div>
  );
};

export default App;
