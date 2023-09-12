import React from 'react';
import './App.scss';
import Menu from './components/menu/menu';
import { SectionOne } from './components/SectionOne/SectionOne';
import { SectionTwo } from './components/SectionTwo/SectionTwo';
import { SectionThree } from './components/SectionThree/SectionThree';

function App() {
  return (
    <div className="App">
      <Menu /> 
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <div className="content">
        
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
