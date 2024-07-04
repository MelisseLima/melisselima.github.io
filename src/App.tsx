import React from 'react';
import './App.css';

import HeaderProfile from './sections/HeaderProfile';
import AboutMe from './sections/AboutMe';
import Skills from './sections/Skills';
import pt_br from './data/pt_br';
import Services from './sections/Services';

function App() {
  return (
    <div className="App">
      <HeaderProfile />
      <AboutMe />
      <Skills skills={pt_br.skills} />
      <Services />
    </div>
  );
}

export default App;
