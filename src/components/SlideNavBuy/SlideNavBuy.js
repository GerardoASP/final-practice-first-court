import { React} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import "./SlideNavBuy.scss"

export const BuyersSlide = ({ buyers }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <div className='slideContainer3' id='slideContainer3'>
            <div className='title-slides-three'>
                <h1>Purchased Characters</h1>
            </div>
            <Slider {...settings}>
                {buyers.map((character, idCharacter) => {
                    return (
                        <div key={idCharacter}>
                            <img src={character.avatar} alt={`Image ${idCharacter}`} />
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}