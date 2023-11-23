import React from 'react'
import "./Home.scss"

import { MenuLateral } from '../menuLateral/menuLateral';
import { SlideNav } from '../slide/slide';
import Navbar from '../menu/menu';
import NavbarAdmin from '../menuAdmin/menuAdmin';
import RegisterProduct from '../RegisterProduct/RegisterProduct';

const Home = () => {
  return (
    <div className='Home'>
      <NavbarAdmin />
      <MenuLateral />
      <RegisterProduct />
      <SlideNav />
    </div>
  )
}

export default Home
