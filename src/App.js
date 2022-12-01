import React from 'react';
import { About, Footer, Header, Skills, Testimonials, Work } from './container';
import { Navbar } from './components';

import './App.scss';

const App = () => {
  return (
    <div className='App'>
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default App