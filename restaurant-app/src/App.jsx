// App.jsx
import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Menu from './Menu';
import About from './About';
import Footer from './Footer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Menu />
      <About />
      <Footer />
    </div>
  );
};

export default App;