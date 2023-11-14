import React from 'react'
import "./Home.scss"

import { MenuLateral } from '../menuLateral/menuLateral';
import { SlideNav } from '../slide/slide';
import Navbar from '../menu/menu';

const Home = () => {
  return (
    <div className='Home'>
      <Navbar />
      <MenuLateral />
      <SlideNav />
    </div>
  )
}

export default Home
