import React from 'react';
import './App.css';

// Components
import Logo from './Components/Logo/Logo';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Avail from './Components/Avail/Avail';

function App() {
  return (
    <div className="App">
      <Logo />
      <Header />
      <Avail />
      <Footer />
    </div>
  );
}

export default App;
