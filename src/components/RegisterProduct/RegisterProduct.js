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
    <div className="register-product-container">
      <form className="form">
      <p className="title">Register Product </p>
      <p className="message">Ingresa los datos para agregar producto</p>
      <label>
          <input className="input" type="text" placeholder="" required="" value={name} onChange={e => setName(e.target.value)}/>
          <span>Name</span>
      </label> 
       <label>
          <input className="input" type="text" placeholder="" required="" value={description} onChange={e => setDescription(e.target.value)}/>
          <span>Description</span>
      </label> 

      <label>
          <input className="input" type="text" placeholder="" required="" value={avatar} onChange={e => setAvatar(e.target.value)}/>
          <span>Avatar</span>
      </label>
      <Button className="submit" onClick={registerProduct}>Product Register</Button>
  </form>
    </div>
  )
}

export default RegisterProduct
