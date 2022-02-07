import {
  About,
  Chef,
  Contact,
  Footer,
  Gallery,
  Hero,
  Intro,
  Laurels,
  Navbar,
  SpecialMenu
} from 'components';
import React from 'react';

function App() {
  return (
    <div className="min-h-screen w-full app">
      <Navbar />
      <Hero />
      <About />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
