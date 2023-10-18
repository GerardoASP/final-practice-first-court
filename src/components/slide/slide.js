import {React,  useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import "./slide.scss"
import { Button } from '@material-ui/core'
import { images } from '../../assets'
import { Box, Modal, Typography } from '@mui/material'


export const SlideNav = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        justifyContent: 'center',
        alignItems: 'center'
    };

    const characters = [
        {
          _id: "1",
          nameService: "Serval Landau",
          serviceDescription: "Mecanica en Belobog",
          avatar: images.character2,
        },
        {
          _id: "2",
          nameService: "Gepard Landau",
          serviceDescription: "Capitán de la Guardia Crinargenta y guerrero notorio de Belobog. Es tal y como aparenta ser, muy meticuloso y dedicado.",
          avatar: images.character1,
        },
        {
          _id: "3",
          nameService: "Lynx Landau",
          serviceDescription: "Exploradora en Belobog",
          avatar: images.character3,
        },
    ];

    const [open,setOpen] = useState(false);
    const [selectedCharacter,setSelectedCharacter] = useState(null);
    const handleOpen = (characterId) => {
        console.log("charactersId", characterId);
        console.log("characters", characters);
        const characterRes = characters.find((character) => character._id === characterId);
        console.log("character", characterRes);
        setSelectedCharacter(characterRes);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

  return (
    <div className='slideContainer' id='slideContainer'>
        <h1>Slides</h1>
        <Slider {...settings}>
        {characters.map((character,idCharacter)=>{return(
        <div key={idCharacter}>
          <img
            src={character.avatar}
            alt={`Image ${idCharacter}`}
          />  
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button variant="contained" color="primary" onClick={() => handleOpen(character._id)}>
                    Ver mas
                </Button>
            </div>
        </div>
        )})}
        </Slider>
        <Modal  open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" style={{fontSize: 36,textAlign: 'center'}}>
                    {selectedCharacter ? selectedCharacter.nameService : ''}
                </Typography>
                <img src={selectedCharacter ? selectedCharacter.avatar : ''} style={{width: '300px', height: '200px', borderRadius:25, marginLeft:50}}/>
                <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{fontSize: 20,textAlign: 'center'}}>
                    {selectedCharacter ? selectedCharacter.serviceDescription : ''}
                </Typography>
            </Box>
          </Modal>
    </div>
  )
}
