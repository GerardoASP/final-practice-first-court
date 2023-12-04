import {React,  useEffect,  useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import "./slide.scss"
import { Button} from '@material-ui/core'
import { images } from '../../assets'
import { Box, Modal, Typography } from '@mui/material'
import { Favorite, ShoppingCart } from '@material-ui/icons'
import FavoritesCharactersList from '../FavoritesCharactersList/FavoritesCharactersList'
import BuyersCharactersList from '../BuyersCharactersList/BuyersCharactersList'
import Footer from '../Footer/Footer'
import ArticleIcon from '@mui/icons-material/Article';



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
        },{
          _id: "4",
          nameService: "Clara",
          serviceDescription: "Criada por un robot",
          avatar: images.character4,
        }
    ];

    const [open,setOpen] = useState(false);
    const [selectedCharacter,setSelectedCharacter] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const [buyers,setBuyers] = useState([]);

    const handleOpen = (characterId) => {
        console.log("charactersId", characterId);
        console.log("characters", characters);
        const characterRes = products.find((character) => character._id === characterId);
        console.log("character", characterRes);
        setSelectedCharacter(characterRes);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    const handleFavorite = async () => {
      // Asegúrate de tener un producto seleccionado
      if (!selectedCharacter) {
        console.error("No hay un personaje seleccionado.");
        return;
      }
    
      // Actualiza el estado local
      setFavorites((prevFavorites) => [...prevFavorites, selectedCharacter]);
    
      // Actualiza el estado en el servidor
      const productId = selectedCharacter._id;

      try {
        const response = await fetch(`http://localhost:3000/api/v1/products/update-product/${selectedCharacter._id}`, {
          method: 'PUT',  // Utiliza el método HTTP correcto para la actualización (en este caso, PUT)
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            // Puedes enviar la información que desees actualizar en el cuerpo de la solicitud
            // Por ejemplo, podrías tener un campo 'isFavorite' en tu modelo de producto
            state: "In_Stock",  // O cualquier otro campo que necesites actualizar
          }),
        });
        console.log(response);
        if (!response.ok) {
          console.error('Error al actualizar el estado del producto en el servidor:', response.status);
          // Si es necesario, puedes revertir el cambio en el estado local
          setFavorites((prevFavorites) => prevFavorites.filter((item) => item._id !== productId));
        } else {
          alert('Estado del producto actualizado con éxito.');
        }
      } catch (error) {
        console.error('Error en la solicitud de actualización:', error);
        // Si ocurre un error, puedes revertir el cambio en el estado local
        setFavorites((prevFavorites) => prevFavorites.filter((item) => item._id !== productId));
      }
    };

    const handleBuyer = async () => {
      // Asegúrate de tener un producto seleccionado
      if (!selectedCharacter) {
        console.error("No hay un personaje seleccionado.");
        return;
      }
    
      // Actualiza el estado local
      setBuyers((prevBuyers) => [...prevBuyers, selectedCharacter]);
    
      // Actualiza el estado en el servidor
      const productId = selectedCharacter._id;

      try {
        const response = await fetch(`http://localhost:3000/api/v1/products/update-product/${selectedCharacter._id}`, {
          method: 'PUT',  // Utiliza el método HTTP correcto para la actualización (en este caso, PUT)
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            // Puedes enviar la información que desees actualizar en el cuerpo de la solicitud
            // Por ejemplo, podrías tener un campo 'isFavorite' en tu modelo de producto
            state: "In_Process",  // O cualquier otro campo que necesites actualizar
          }),
        });
        if (!response.ok) {
          console.error('Error al actualizar el estado del producto en el servidor:', response.status);
          // Si es necesario, puedes revertir el cambio en el estado local
          setBuyers((prevBuyers) => prevBuyers.filter((item) => item._id !== productId));
        } else {
          alert('Estado del producto actualizado con éxito.');
        }
      } catch (error) {
        console.error('Error en la solicitud de actualización:', error);
        // Si ocurre un error, puedes revertir el cambio en el estado local
        setBuyers((prevBuyers) => prevBuyers.filter((item) => item._id !== productId));
      }
    };

    const [products,setProducts]= useState([])
    useEffect(() => {
      fetch('http://localhost:3000/api/v1/products')
        .then(response => response.json())
        .then(data => setProducts(data));
    }, []);

    const handleState = async () => {

    }
  return (
    <div className='slideContainer' id='slideContainer'>
        <div className='title-slides'>
          <h1>Slides</h1>
        </div>
        <Slider {...settings}>
        {products.map((character,idCharacter)=>{return(
        <div key={idCharacter}>
          <img
            src={character.avatar}
            alt={`Avatar of ${character.name}`}
          />  
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button variant="contained" color="primary" onClick={() => handleOpen(character._id)}>
                    Ver mas
                </Button>
            </div>
        </div>
        )})}
        </Slider>
        <FavoritesCharactersList favorites={favorites} />
        <BuyersCharactersList buyers={buyers} />
        <Footer />
        <Modal  open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" style={{fontSize: 36,textAlign: 'center'}}>
                    {selectedCharacter ? selectedCharacter.name : ''}
                </Typography>
                <img src={selectedCharacter ? selectedCharacter.avatar : ''} style={{width: '300px', height: '200px', borderRadius:25, marginLeft:50}} alt='dios'/>
                <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{fontSize: 20,textAlign: 'center'}}>
                    {selectedCharacter ? selectedCharacter.description : ''}
                </Typography>
                <div className='container-buttons'>
                  <Button variant="contained" color="primary" startIcon={<Favorite/>} onClick={handleFavorite}/>
                  <Button variant="contained" color="primary" startIcon={<ArticleIcon/>} onClick={handleBuyer}/> 
                </div>
            </Box>
        </Modal>
    </div>
  )
}
