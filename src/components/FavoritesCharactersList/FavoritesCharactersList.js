import React from 'react'
import "./FavoritesCharactersList.scss"
import { Card, CardContent} from 'semantic-ui-react'
import { CardMedia, Typography } from '@mui/material'

const FavoritesCharactersList = ({ favorites }) => {
  return (
    <div className='Container5' id='Container5' >
      <div className='title-slides-two'>
        <h1>Favorites</h1>
      </div>
      <div className="img-content-grid">
        {favorites && favorites.length > 0 ? (
          favorites.map((character) => (
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
                  alt='character-image'
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
            <p>No hay favoritos</p>
          )
        }
      </div>
    </div>
  )
}

export default FavoritesCharactersList
