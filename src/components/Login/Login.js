import React, { useState } from 'react'
import './Login.scss';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const homeAdmin = () => {
        console.log('Di click en homeAdmin');
        window.location.href = '/HomeAdmin';
      }
   
    const handleLogin = async () => {
        const userData = {
            email:email,
            password:password
        }
      try {
        const response = await fetch('http://localhost:3000/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      console.log(data);
      if (typeof data !== 'undefined' && data !== null) {
        if(!data.access){
            console.log("No puedes")
        }else{
            homeAdmin()
        }
        
      } else {
        //console.error('Registration failed');
        console.error('Login failed:', data.message);
      }
      } catch (error) {
        console.error(error);
      }
    }

  return (
    <div className='login-container'>
        <div className='login-header'>
            Login
        </div>
        <center style={{marginBottom:20}}>
            "Ingresa los datos para cuenta Triptop"
        </center>
        <div className='email-container'>
            <label>
                email
            </label>
            <input type="text" name="email" className='input-text' value={email} onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className='password-container'>
            <label>
                password
            </label>
            <input type="text" name="password" className='input-text' value={password} onChange={e => setPassword(e.target.value)}/>
        </div>
        
            <Button onClick={handleLogin} >Aceptar</Button>
        
    </div>
  )
}

export default Login
