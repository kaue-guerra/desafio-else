import React from 'react';
import { Header } from './components/Header'
import './styles/global.css'

import { Router } from "./router";

function App() {
  return (
    <>
      <Header />
      <Router />
    </>
  );
}

export default App;
