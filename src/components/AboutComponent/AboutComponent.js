import React from 'react'
import "./AboutComponent.scss"
import Navbar from '../menu/menu'
import Footer from '../Footer/Footer'
import IngeIndus from '../../assets/images/andres_indus.jpg'

const AboutComponent = () => {
  return (
    <div className='about-container'>
        <Navbar />
        <div className='first-container'>
            <h1 className='title-first-container'>About us</h1>
        </div>
        <div className='second-container'>
            <h2>Nuestra Misión</h2>
            <div className='subcontainer-second-container'>
              <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
            </div>
        </div>
        <div className='third-container'>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <p class="title">TripTop System</p>
              </div>
              <div class="flip-card-back">
                <p class="title">CEO</p>
                <p>Andres</p>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <p class="title">TripTop System</p>
              </div>
              <div class="flip-card-back">
                <p class="title">Systems</p>
                <p>Gerardo</p>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <p class="title">TripTop System</p>
              </div>
              <div class="flip-card-back">
                <p class="title">Maintenance</p>
                <p>Oscar</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default AboutComponent
