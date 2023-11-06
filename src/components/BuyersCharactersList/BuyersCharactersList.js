import React from 'react'
import "./BuyersCharactersList.scss"
import { Card, CardContent} from 'semantic-ui-react'
import { CardMedia, Typography } from '@mui/material'


const BuyersCharactersList = ({ buyers }) => {
  return (
    <div className='Container6' id='Container6' >
      <div className='title-slides-two'>
        <h1>Buyers</h1>
      </div>
      <div className="img-content-grid">
        {buyers && buyers.length > 0 ? (
          buyers.map((character) => (
            <div key={character._id}>
              <Card sx={{maxWidth:100, margin:'auto'}}>
                <div className='container-id'>
                    <CardContent>
                        <Typography variant="h3" color="text.secondary">
                          {character._id}
                        </Typography>
                    </CardContent>
                </div>
                <CardMedia
                  component="img"
                  height="350"
                  image={character.avatar}
                  alt='image-character'
                />
                <div className='container-favorite'>
                  <CardContent>
                    <Typography variant="h3" color="text.secondary">
                      Favorite
                    </Typography>
                  </CardContent>
                </div>
                
              </Card>
            </div>
          ))
          ) : (
            <p>No hay personajes en el carrito de compras</p>
          )
        }
      </div>
    </div>
  )
}

export default BuyersCharactersList
