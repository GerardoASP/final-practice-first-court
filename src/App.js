import React from 'react';
import './App.scss';
import Menu from './components/menu/menu';
import { SectionOne } from './components/SectionOne/SectionOne';
import { SectionTwo } from './components/SectionTwo/SectionTwo';
import { SectionThree } from './components/SectionThree/SectionThree';
import {SlideNav} from './components/slide/slide';
import {MenuLateral} from './components/menuLateral/menuLateral'
function App() {
  return (
    <div className="App">
      <Menu /> 
      <MenuLateral />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <div className="content">
        
      </div>
      <div className="footer"></div>
      <SlideNav />
    </div>
  );
}

export default App;
