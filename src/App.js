import React from 'react';
import './App.scss';
import Menu from './components/menu/menu';
import { SectionOne } from './components/SectionOne/SectionOne';
import { SectionTwo } from './components/SectionTwo/SectionTwo';
import { SectionThree } from './components/SectionThree/SectionThree';
import {SlideNav} from './components/slide/slide';
import {MenuLateral} from './components/menuLateral/menuLateral'
import Cube from './components/cube/cube'
import TraslucentMenu from './components/TraslucentMenu/TraslucentMenu';

function App() {
  return (
    <div className="App">
      <Menu />
      <MenuLateral />
      <Cube />
      <div className="content">
        
      </div>
      <div className="footer"></div>
      <SlideNav />
    </div>
  );
}

export default App;
