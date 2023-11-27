import React, { useState } from 'react'
import './VerifyComponent.scss';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const VerifyComponent = () => {
    const [email, setEmail] = useState('');

    const goToLogin = () => {
        console.log('Di click en goToLogin');
        window.location.href = '/login';
    }
    
    
    const handleVerify = async () => {
        const userData = {
            email:email,
        }
      try {
        const response = await fetch(`http://localhost:3000/api/v1/users/get-user-by-email/${userData.email}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log(data)
      if (typeof data !== 'undefined' && data !== null) {
        const userData2 = {
            active:true
        }
        try{
            await fetch(`http://localhost:3000/api/v1/users/update-user/${data._id}`,{
                method:'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData2),
            })
            alert("Felicidades, Cuenta Autenticada")
        }catch(error){
            console.error(error);
        }
      } else {
        console.error('Process failed:', data.message);
      }
      } catch (error) {
        console.error(error);
      }
    }

  return (
    <div className="verify-container">
      <form className="form">
      <p className="title">Autenticación</p>
      <p className="message">Ingresa tu email para activar cuenta Triptop </p>
      <label>
          <input className="input" type="email" placeholder="" required="" value={email} onChange={e => setEmail(e.target.value)}/>
          <span>Email</span>
      </label> 
      <Button className="submit" onClick={handleVerify}>Accept</Button>
  </form>
    </div>
    
  )
}

export default VerifyComponent
