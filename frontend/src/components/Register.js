import React from 'react'
import { useState } from 'react'
import axios from 'axios'


const Register = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [department, setDepartment] = useState('')
    const [matricNumber, setMatricNumber] = useState('')
    const [dob, setDob] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState('');



  
    const handleRegister =()=>{
        if (firstName && lastName && department && matricNumber && dob && email && phoneNumber && password) {
            setLoading(true); // Start loading indicator

            axios.post("http://localhost:5000/register", {
                firstName: firstName,
                lastName: lastName,
                department: department,
                matricNumber: matricNumber,
                dob: dob,
                email: email,
                phoneNumber: phoneNumber,
                password: password
               
            })
                .then(response => {
                    setSuccess(response.data.message);
                })
                .catch(error => {
                    setError(error.response.data.message);
                    
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setError('Please fill in all required fields.');
        }

    }

    const handleSubmit =(event)=>{
        event.preventDefault()
        handleRegister()
    }
  

  return (

    <div>
        {loading && <h4>Loading...</h4>}

        <form onSubmit={handleSubmit}>
            <label>FirstName</label>
            <input 
                type='text'                       
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}/>
            <br/>
            <br/>
            <label>LastName</label>
            <input 
                type='text'
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}/>
            <br/>
            <br/>
            <label>Department</label>
            <input 
                type='text'
                value={department}
                onChange={(event) => setDepartment(event.target.value)}/>
            <br/>
            <br/>
            <label>MatricNumber</label>
            <input 
                type='text'
                value={matricNumber}
                onChange={(event) => setMatricNumber(event.target.value)}/>
            <br/>
            <br/>
            <label>Email</label>
            <input 
                type='email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}/>
            <br/>
            <br/>
            <label>Date of birth</label>
            <input 
                type='date'
                value={dob}
                onChange={(event) => setDob(event.target.value)}/>
            <br/>
            <br/>
            <label>Phone Number</label>
            <input 
                type='number'
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}/>
            <br/>
            <br/>
    
            <label>password</label>
            <input 
                type='password'
                value={password}
                onChange={(event) => setPassword(event.target.value)}/>
            <br/>
            <br/>
            <input type='submit'/>

        </form>

        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  )
}

export default Register