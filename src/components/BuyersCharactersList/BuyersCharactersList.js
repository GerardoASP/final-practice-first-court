import React from 'react'
import "./BuyersCharactersList.scss"
import { Card, CardContent} from 'semantic-ui-react'
import { CardMedia, Typography } from '@mui/material'


const BuyersCharactersList = ({ buyers }) => {
  return (
    <div className='Container6' id='Container6' >
      <div className='title-slides-two'>
        <h1></h1>
      </div>
      <div className="img-content-grid-2">
        {buyers && buyers.length > 0 ? (
          buyers.map((character) => (
            <div key={character._id}>
              <div className="container-card-2">
	              <div className="container-header-2">
		              <div className="item-id-2">
			              <Typography variant="subtitle1" color="text.secondary">
                      {character._id}
                    </Typography>
		              </div>
		              <div className="item-name-2">
			              <Typography variant="subtitle1" color="text.secondary">
                      {character.nameService}
                    </Typography>
		              </div>
	              </div>
	              <div className="container-body-2">
		              <div className="item-image-2">
			              <img src={character.avatar} alt={`Avatar ${character._id}`}/>
		              </div>
	              </div>
	              <div className="final-container-2">
		              <div className="item-text-2">
			              <Typography variant="subtitle1" color="text.secondary">
                      In Process
                    </Typography>
		              </div>
	              </div>
              </div>
            </div>
          ))
          ) : (
            <p>No hay personajes en proceso</p>
          )
        }
      </div>
    </div>
  )
}

export default BuyersCharactersList
