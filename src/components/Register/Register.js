import React, { useEffect, useState } from 'react'
import './Register.scss';
import { Button, Checkbox } from '@mui/material';
import { Link } from 'react-router-dom';

const Register = () => {
  const [departments, setDepartments] = useState([]);
  const [municipalities, setMunicipalities] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [isColombia, setIsColombia] = useState(true);
  //User Data
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [department,setDepartment]=useState("");
  const [municipality,setMunicipality]=useState("");
  const [typeDocument,setTypeDocument]=useState("");
  const [document,setDocument]=useState("");
  const [email,SetEmail] = useState("");
  const [password,setPassword] = useState("");

  const login = () => {
    console.log('Di click en login');
    window.location.href = '/login';
  }

  const register =  async () => {
    const userData = {
      firstname: firstName,
      lastname: lastName,
      country:country,
      department:department,
      municipality:municipality,
      document_type:typeDocument,
      document:document,
      email:email,
      password:password,
      avatar:"",
      rol:""
      // ... and so on for the other fields
    };
   
    try {
      const response = await fetch('http://localhost:3000/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      console.log(data);
      if (typeof data !== 'undefined' && data !== null) {
        login()
      } else {
        //console.error('Registration failed');
        console.error('Registration failed:', data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
   };
   
  const handleCountryChange = (event) => {
    setIsColombia(event.target.value === 'Colombia');
   };

   const handleCountryAndCountryChange = (event) => {
    handleCountryChange(event);
    setCountry(event.target.value);
   };
   
   const handleDepartmentAndDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
    setDepartment(event.target.value)
   };
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
        <input type="text" name="firstName" className='input-text' onChange={e => setFirstName(e.target.value)}/>
      </div>
      <div className='lastname-container'>
        <label>
          lastName
        </label>
        <input type="text" name="lastName" className='input-text' onChange={e => setLastName(e.target.value)}/>
      </div>
      <div className='country-container'>
        <label>
          country
        </label>
        <input type="text" name="country" className='input-text' onChange={handleCountryAndCountryChange} />
      </div>
      {isColombia && (
 <>
   <div className='list-departments-container'>
     <label>Department</label>
     <select name="departments" id="depart" onChange={handleDepartmentAndDepartmentChange}>
       {departments.map(department => (
         <option key={department} value={department}>
           {department}
         </option>
       ))}
     </select>
   </div>
   <div className='list-municipalities-container'>
     <label>Municipality</label>
     <select name="municipalities" id="municipality" onChange={e => setMunicipality(e.target.value)}>
       {municipalities.map(municipality => (
         <option key={municipality} value={municipality}>
           {municipality}
         </option>
       ))}
     </select>
   </div>
 </>
)}
      <div className='list-types-documents'>
        <label>
          Type Document
        </label>
        <select name="type-document" id="type-document" onChange={e => setTypeDocument(e.target.value)}>
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
        <input type="text" name="document" className='input-text' onChange={e => setDocument(e.target.value)}/>
      </div>
      <div className='email-container'>
        <label>
          email
        </label>
        <input type="text" name="email" className='input-text' onChange={e => SetEmail(e.target.value)}/>
      </div>
      <div className='password-container'>
        <label>
          password
        </label>
        <input type="text" name="password" className='input-text' onChange={e => setPassword(e.target.value)}/>
      </div>
      <div className='checkbox-container'>
        <label>
          Aceptar terminos y condiciones
        </label>
        <Checkbox/>
      </div>
      
        <Button onClick={register}>Registrarme</Button>
      
    </div>
  )
}

export default Register