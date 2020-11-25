import React from 'react';
import './App.css';

import Lander from "./components/Lander";
import About from "./components/About";
import Footer from "./components/Footer";
import WorkExp from "./components/WorkExp";

function App() {
  return (
    <div className="App">
      <Lander />
      <About />
      <WorkExp />
      <Footer />
    </div>
  );
}

export default App;
