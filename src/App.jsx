import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import { PORTFOLIO_DATA } from './data';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero data={PORTFOLIO_DATA.hero} />
        <About data={PORTFOLIO_DATA.about} />
        <Services data={PORTFOLIO_DATA.services} />
        <Projects data={PORTFOLIO_DATA.projects} />
        <Achievements data={PORTFOLIO_DATA.achievements} resume={PORTFOLIO_DATA.about.resume} />
      </main>
      <Contact data={PORTFOLIO_DATA.contact} />
    </>
  );
}

export default App;
