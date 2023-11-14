import React from 'react'
import './Login.scss';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
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
            <input type="text" name="email" className='input-text' />
        </div>
        <div className='password-container'>
            <label>
                password
            </label>
            <input type="text" name="password" className='input-text' />
        </div>
        <Link to='/ListUser'>
            <Button>Aceptar</Button>
        </Link>
    </div>
  )
}

export default Login
