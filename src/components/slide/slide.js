import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import "./slide.scss"
import Gepard from '../../assets/images/gepard-removebg-preview.png'
import Serval from '../../assets/images/serval.png'
import Lynx from '../../assets/images/lynx.png'

export const SlideNav = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    };
  return (
    <div className='slideContainer' id='slideContainer'>
        <h1>Slides</h1>
        <Slider {...settings}>
            <div>
                <img src={Gepard} />
            </div>
            <div>
                <img src={Serval} />
            </div>
            <div>
                <img src={Lynx} />
            </div>
        </Slider>
    </div>
  )
}
