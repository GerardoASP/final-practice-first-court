import React, { useEffect, useState } from 'react'
import './Register.scss';
import { Button, Checkbox } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo_gerencia-removebg-preview.png';

const Register = () => {
  const [departments, setDepartments] = useState([]);
  const [municipalities, setMunicipalities] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [isColombia, setIsColombia] = useState(true);
  const [termsAccepted, setTermsAccepted] = useState(false);
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
    if (!termsAccepted) {
      alert('Please accept the terms and conditions');
      return;
    }else{
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
        rol:"user"
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
    }
   };
   
  const handleCountryChange = (event) => {
    setIsColombia(event.target.value === 'Colombia');
   };

   const handleCountryAndCountryChange = (event) => {
    setCountry(event.target.value);
    handleCountryChange(event);
    
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
      <form className="form">
	      <p className="title">Register </p>
	      <p className="message">Ingresa los datos para cuenta Triptop </p>
	    
		      <label>
            <input className="input" type="text" placeholder="" required="" onChange={e => setFirstName(e.target.value)}/>
           	<span>Firstname</span>
        	</label>
		      <label>
            <input className="input" type="text" placeholder="" required="" onChange={e => setLastName(e.target.value)}/>
           	<span>Lastname</span>
        	</label>
		<label>
            	<input className="input" type="text" placeholder="" required="" onChange={ handleCountryAndCountryChange}/>
           		<span>Country</span>
        	</label>
	{isColombia && (
 		<>
   			<label>
       				<select name="departments" id="depart" onChange={handleDepartmentAndDepartmentChange} className="input">
       					{departments.map(department => (
         					<option key={department} value={department}>
           						{department}
         					</option>
       					))}
     				</select>
				<span>Department</span>
   			</label>
   			<label>
       				<select name="municipalities" id="municipality" onChange={e => setMunicipality(e.target.value)} className="input">
       					{municipalities.map(municipality => (
         					<option key={municipality} value={municipality} class="input">
           						{municipality}
         					</option>
       					))}
     				</select>
				<span>Municipality</span>
  			</label>
 		</>
	)}
        <label>
          	<select name="type-document" id="type-document" onChange={e => setTypeDocument(e.target.value)} className="input">
          		<option value="CC">C.C</option>
          		<option value="RC">RC</option>
          		<option value="CE">CE</option>
          		<option value="DNI">DNI</option>
       		</select>
		<span>Type Document</span>
        </label>
	<label>
            	<input className="input" type="text" placeholder="" required="" onChange={e => setDocument(e.target.value)}/>
           	<span>Document</span>
        </label>
	<label>
          <input className="input" type="email" placeholder="" required="" value={email} onChange={e => SetEmail(e.target.value)}/>
          <span>Email</span>
      	</label>
	<label>
        	<input className="input" type="password" placeholder="" required="" onChange={e => setPassword(e.target.value)}/>
        	<span>Password</span>
    	</label>
    	<label>
        	<input className="input" type="password" placeholder="" required=""/>
        	<span>Confirm password</span>
    	</label>
      <label>
        <input type="checkbox" checked={termsAccepted} onChange={e => setTermsAccepted(e.target.checked)}/>
        <span>Acepta terminos y condiciones</span>
      </label>

	<Button className="submit" onClick={register}>Accept</Button> 
</form>
  
  </div>
  )
}

export default Register