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
                <div class="card">
                  <div class="card-img">
                    <img src={character.avatar} alt={`Avatar ${character._id}`}/>
                  </div>
                  <div class="card-info">
                    <p class="text-title">{character.nameService}</p>
                    <p class="text-body">{character.description}</p>
                  </div>
                  <div class="card-footer">
  	                <span class="text-title">In Process</span>
                  </div>
                </div>
              </div>
            </div>
          ))
          ) : (
            <p>No hay productos en proceso</p>
          )
        }
      </div>
    </div>
  )
}

export default BuyersCharactersList
