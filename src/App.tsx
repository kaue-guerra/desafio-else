import React from 'react';
import { Header } from './components/Header'
import './styles/global.css'

import { Router } from "./router";
import { CarsContext, CarsProvider } from './context/CarsContext';

function App() {
  return (
    <CarsProvider>
      <Header />
      <Router />
    </CarsProvider>
  );
}

export default App;
