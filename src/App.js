import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Portfolio from './pages/Portfolio/Portfolio';
import About from './pages/About/About';
import Testimonial from './pages/Testimonial/Testimonial';
import Contact from './pages/Conatct/Contact';
import Footer from './Components/Footer/Footer';
import Service from './pages/Service/Service';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Service />
      <Portfolio />
      <About />
      <Testimonial />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
