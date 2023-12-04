import React, { useEffect, useState } from 'react'
import "./BuyersCharactersList.scss"
import { Card, CardContent} from 'semantic-ui-react'
import { CardMedia, Typography } from '@mui/material'


const BuyersCharactersList = ({ buyers }) => {
  const [productsprocess,setProductProcess] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/v1/products/state/In_Process')
      .then(response => response.json())
      .then(data => setProductProcess(data));
  }, []);
  return (
    <div className='Container6' id='Container6' >
      <div className='title-slides-two'>
        <h1></h1>
      </div>
      <div className="img-content-grid-2">
        {productsprocess && productsprocess.length > 0 ? (
          productsprocess.map((character) => (
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
  	                <span class="text-title">{character.state}</span>
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
