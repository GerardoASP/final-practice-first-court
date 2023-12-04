import React, { useEffect, useState } from 'react'
import "./FavoritesCharactersList.scss"
import { Card, CardContent} from 'semantic-ui-react'
import { CardMedia, Typography } from '@mui/material'

const FavoritesCharactersList = ({ favorites }) => {
  const [productsstock,setProductStock] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/v1/products/state/In_Stock')
      .then(response => response.json())
      .then(data => setProductStock(data));
  }, []);
  return (
    <div className='Container5' id='Container5' >
      <div className='title-slides-two'>
        <h1></h1>
      </div>
      <div className="img-content-grid">
        {productsstock && productsstock.length > 0 ? (
          productsstock.map((character) => (
            <div key={character._id}>
              <div className="container-card">
              <div class="card">
                  <div class="card-img">
                    <img src={character.avatar} alt={`Avatar ${character._id}`}/>
                  </div>
                  <div class="card-info">
                    <p class="text-title">{character.nameService}</p>
                    <p class="text-body">{character.description}</p>
                  </div>
                  <div class="card-footer">
  	                <span class="text-title">{character.state}</span>
                  </div>
                </div>
              </div>
            </div>
          ))
          ) : (
            <p>No hay productos en inventario</p>
          )
        }
      </div>
    </div>
  )
}

export default FavoritesCharactersList
