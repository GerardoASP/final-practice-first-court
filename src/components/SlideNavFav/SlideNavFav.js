import { React} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import "./SlideNavFav.scss"

export const FavoritesSlide = ({ favorites }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <div className='slideContainer2' id='slideContainer2'>
            <div className='title-slides-two'>
                <h1>Favorites</h1>
            </div>
            <Slider {...settings}>
                {favorites.map((character, idCharacter) => {
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