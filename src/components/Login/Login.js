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
    
    const homeUser = () =>{
      console.log('Di click en homeUser');
      window.location.href = '/HomeUser';
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
      //const roleAy = data.role
      //console.log('ayuda',roleAy)
      console.log(data)
      if (typeof data !== 'undefined' && data !== null) {
        if(!data.access){
            console.log("No puedes iniciar sesión")
        }else{
          if (data.rol === "admin") {
            homeAdmin();
          }else if (data.rol === 'user') {
            homeUser();
          }else{
            console.log("Rol desconocido");
          }
            //homeAdmin()
            //homeUser()
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
    <div className="login-container">
      <form className="form">
      <p className="title">Login </p>
      <p className="message">Ingresa los datos para cuenta Triptop </p>
      <label>
          <input className="input" type="email" placeholder="" required="" value={email} onChange={e => setEmail(e.target.value)}/>
          <span>Email</span>
      </label> 

      <label>
          <input className="input" type="password" placeholder="" required="" value={password} onChange={e => setPassword(e.target.value)}/>
          <span>Password</span>
      </label>
      <Button className="submit" onClick={handleLogin}>Accept</Button>
  </form>
    </div>
    
  )
}

export default Login
