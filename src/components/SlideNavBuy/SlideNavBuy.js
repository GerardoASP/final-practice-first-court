import { React} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import "./SlideNavBuy.scss"
import { Avatar, Card, CardContent, CardHeader, CardMedia } from '@mui/material'
import { Typography } from '@material-ui/core'
import { grey } from '@mui/material/colors'

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
                            <Card sx={{maxWidth:500, margin:'auto'}}>
                                <CardHeader avatar = {
                                    <Avatar sx={{bgcolor:grey[500]}} aria-label='recipe'>
                                        <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{fontSize: 20,textAlign: 'center'}}>
                                            {character._id}
                                        </Typography>
                                    </Avatar>
                                } title={character.nameService}/>
                                <CardMedia
                                    component="img"
                                    height="350"
                                    image={character.avatar}
                                    alt='image-character'
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        Buyer
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