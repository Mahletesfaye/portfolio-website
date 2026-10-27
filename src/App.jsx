import React from 'react';
import Header from './components/Header/Header.jsx';
import HomeSection from './components/Home-section/Home-section.jsx';
import AboutSection from './components/About-section/About.jsx';
import Services from './components/Services/Services.jsx';

function App() {
  return (
    <div>
      <Header />
      <HomeSection />
      <AboutSection />
      <Services />
    </div>
  );
}

export default App;