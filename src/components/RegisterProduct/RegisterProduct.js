import React, { useState } from 'react'
import './RegisterProduct.scss';
import { Button } from '@mui/material';


const RegisterProduct = () => {
  const [name,setName] = useState("");
  const [description,setDescription] = useState("");
  const [avatar,setAvatar] = useState("");
  

  const registerProduct =  async () => {
    const productData = {
        name: name,
        description: description,
        avatar:avatar,
        // ... and so on for the other fields
    };

    try {
        const response = await fetch('http://localhost:3000/api/v1/products/new-product', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(productData),
        });
        const data = await response.json();
        console.log(data);
        if (typeof data !== 'undefined' && data !== null) {
          console.log("Congratulations for your product register")
        } else {
          //console.error('Registration failed');
          console.error('Registration product failed:', data.message);
        }
      } catch (error) {
        console.error('Error:', error);
      }
  }
  return (
    <div className='register-product-container'>
      <div className='register-product-header'>
        Registrer Product
      </div>
      <center style={{marginBottom:20}}>
        "Ingresa los datos para agregar producto"
      </center>
      <div className='name-container'>
        <label>
          name
        </label>
        <input type="text" name="name" className='input-text' onChange={e => setName(e.target.value)}/>
      </div>
      <div className='description-container'>
        <label>
          description
        </label>
        <input type="text" name="description" className='input-text' onChange={e => setDescription(e.target.value)}/>
      </div>
      <div className='avatar-container'>
        <label>
          avatar
        </label>
        <input type="text" name="avatar" className='input-text' onChange={e => setAvatar(e.target.value)}/>
      </div>
      <Button onClick={registerProduct}>Product Register</Button>
    </div>
  )
}

export default RegisterProduct
