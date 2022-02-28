import { Header } from './components/Header'
import './styles/global.css'

import { Router } from "./router";
import { CarsProvider } from './context/CarsContext';
import { ModalProvider } from './context/ModalContext';

function App() {
  return (
    <CarsProvider>
      <ModalProvider>
        <Header />
        <Router />
      </ModalProvider>
    </CarsProvider>
  );
}

export default App;
