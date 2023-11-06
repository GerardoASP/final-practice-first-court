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
import { FavoritesSlide } from './components/SlideNavFav/SlideNavFav';
import Footer from './components/Footer/Footer';
import PoliticalMenu from './components/PoliticalMenu/PoliticalMenu';
import FavoritesCharactersList from './components/FavoritesCharactersList/FavoritesCharactersList';


function App() {
  return (
    <div className="App">
      <Menu />
      <MenuLateral />
      <SlideNav />
    </div>
  );
}

export default App;
