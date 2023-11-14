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
              <div className="container-card">
	              <div className="container-header">
		              <div className="item-id">
			              <Typography variant="subtitle1" color="text.secondary">
                      {character._id}
                    </Typography>
		              </div>
		              <div className="item-name">
			              <Typography variant="subtitle1" color="text.secondary">
                      {character.nameService}
                    </Typography>
		              </div>
	              </div>
	              <div className="container-body">
		              <div className="item-image">
			              <img src={character.avatar} alt={`Avatar ${character._id}`}/>
		              </div>
	              </div>
	              <div className="final-container">
		              <div className="item-text">
			              <Typography variant="subtitle1" color="text.secondary">
                      Favorite
                    </Typography>
		              </div>
	              </div>
              </div>
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
