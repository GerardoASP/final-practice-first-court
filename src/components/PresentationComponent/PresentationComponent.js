import React from 'react'
import Footer from '../Footer/Footer'
import "./PresentationComponent.scss"
import Navbar from '../menu/menu'
const PresentationComponent = () => {
  return (
    <div className='presentation-container'>
      <Navbar />
      <img src='https://www.nunsys.com/wp-content/uploads/2023/03/SAP-ERP-scaled.jpg' className='image-central'/>
      <div className='services-erp-text'>
        Services-Modules
      </div>
      <div className='list-services-erp'>
        <div className='service-erp'>
            <img src=''/>
            <div className='services-erp-text-2'>
                Inventory
            </div>
        </div>
      </div>
      <div className='information-container'>
        <div className='services-erp-text-2'>
            About us
        </div>
        <div className='services-erp-text-2'>
            Triptop System
        </div>
        <div className='worker-container'>
            <div className='worker'>
                <img src='https://cdn-icons-png.flaticon.com/256/25/25645.png' className='image-worker'/>
                <div className='services-erp-text-3'>
                    Andres Felipe Granada Velásquez
                </div>
            </div>
            <div className='worker'>
                <img src='https://cdn-icons-png.flaticon.com/256/3541/3541240.png' className='image-worker'/>
                <div className='services-erp-text-3'>
                    Oscar David Gomez
                </div>
            </div>
            <div className='worker'>
                <img src='https://cdn-icons-png.flaticon.com/256/9254/9254559.png' className='image-worker'/>
                <div className='services-erp-text-3'>
                    Gerardo Antonio Sánchez Pinilla
                </div>
            </div>
        </div>
        <p>
            Engineering students from the Autonomous 
            University of Manizales whose main objective 
            is the development of ERP Modules for 
            optimize business processes.
        </p>
       </div>
       <Footer />
    </div>
  )
}

export default PresentationComponent
