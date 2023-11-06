import { React} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import "./SlideNavFav.scss"
import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import { blueGrey, grey } from '@mui/material/colors'

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
                            <Card sx={{maxWidth:500, margin:'auto', bgcolor:blueGrey[500]}}>
                                <CardHeader avatar = {
                                    <Avatar sx={{bgcolor:grey[500]}} aria-label='recipe'>
                                        <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{fontSize: 40,textAlign: 'center'}}>
                                            {character._id}
                                        </Typography>
                                    </Avatar>
                                } title={character.nameService} />
                                <CardMedia
                                    component="img"
                                    height="350"
                                    image={character.avatar}
                                    alt='image-character'
                                />
                                <CardContent>
                                    <Typography variant="h4" color="secondary" style={{textAlign: 'center'}}>
                                        Favorite
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}