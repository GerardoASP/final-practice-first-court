import React, { useEffect, useState } from 'react'
import './Register.scss';
import { Button, Checkbox } from '@mui/material';
import { Link } from 'react-router-dom';

const Register = () => {
  const [departments, setDepartments] = useState([]);
  const [municipalities, setMunicipalities] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  
  useEffect(() => {
    fetch('https://evaluation-practice-dev-bqxg.1.us-1.fl0.io/api/v1/addresses/departmentsFetch')
      .then(response => response.json())
      .then(data => setDepartments(data));
  }, []);

  useEffect(() => {
    if (selectedDepartment) {
      fetch(`https://evaluation-practice-dev-bqxg.1.us-1.fl0.io/api/v1/addresses/municipalities/${selectedDepartment}`)
        .then(response => response.json())
        .then(data => setMunicipalities(data));
    }
   }, [selectedDepartment]);

  return (
    <div className='register-container'>
      <div className='register-header'>
        Registrer
      </div>
      <center style={{marginBottom:20}}>
        "Ingresa los datos para cuenta Triptop"
      </center>
      <div className='firstname-container'>
        <label>
          firstName
        </label>
        <input type="text" name="firstName" className='input-text' />
      </div>
      <div className='lastname-container'>
        <label>
          lastName
        </label>
        <input type="text" name="lastName" className='input-text' />
      </div>
      <div className='list-departments-container'>
        <label>Department</label>
        <select name="departments" id="depart" onChange={e => setSelectedDepartment(e.target.value)}>
          {departments.map(department => (
            <option key={department} value={department}>
              {department}
            </option>
          ))}
        </select>
      </div>
      <div className='list-municipalities-container'>
        <label>Municipality</label>
        <select name="municipalities" id="municipality">
          {municipalities.map(municipality => (
            <option key={municipality} value={municipality}>
              {municipality}
            </option>
          ))}
        </select>
      </div>
      <div className='list-types-documents'>
        <label>
          Type Document
        </label>
        <select name="type-document" id="type-document">
          <option value="CC">C.C</option>
          <option value="RC">RC</option>
          <option value="CE">CE</option>
          <option value="DNI">DNI</option>
        </select>
      </div>
      <div className='document-container'>
        <label>
          document
        </label>
        <input type="text" name="document" className='input-text' />
      </div>
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
      <div className='checkbox-container'>
        <label>
          Aceptar terminos y condiciones
        </label>
        <Checkbox/>
      </div>
      <Link to='/login'>
        <Button>Registrarme</Button>
      </Link>
    </div>
  )
}

export default Register
