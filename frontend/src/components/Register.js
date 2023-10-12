import React, { useState} from 'react';
import { Link } from "react-router-dom"
import axios from 'axios';


const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');


    function registerUser(){
        if (firstName && lastName && email && password) {
          axios.post('http://localhost:5000/register', {
            first_name : firstName,
            last_name : lastName,  
            email: email,
            password: password,
          })
          .then(response => {
            console.log("Registration Successful")
            setSuccess("Registration Successful")
          })
          .catch(error => {
            console.log("User Exists")
            setError("User Exists")

    
          });
        }else {
          alert("enter your credentials")
    
        }
      }

    // const registerUser = () => {
    //     fetch(`http://localhost:5000/register`, {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             first_name: firstName,
    //             last_name: lastName,
    //             email: email,
    //             password: password,
    //         }),
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log("Registration Successful");
    //         setSuccess("Registration Successful");
    //     })
    //     .catch(error => {
    //         console.log("User Exists");
    //         setError("User Exists");
    //     });
    // };
    

      const handleSubmit = (event) => {
        event.preventDefault();
        registerUser()
    
      };
    
    return (
        <div>
            <h2>Register Form</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>

            <Link to="/">Login Here</Link>
            {success && <p style={{ color: 'green' }}>{success}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}





        </div>
    )
}

export default Register