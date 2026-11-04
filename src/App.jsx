import React from 'react';

import Header from './components/Header/Header.jsx';
import HomeSection from './components/Home-section/Home-section.jsx';
import AboutSection from './components/About-section/About.jsx';
import Services from './components/Services/Services.jsx';
import Skills from './components/skills/skills.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';

function App() {
  return (
    <div>
      <Header />
      <HomeSection />
      <AboutSection />
      <Services />
      <Skills />
      <Portfolio />
    </div>
  );
}

export default App;