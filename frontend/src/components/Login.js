import React, { useState} from 'react';
import { Link } from "react-router-dom"
import axios from 'axios';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [login, setLogin] = useState(false);


    function loginUser(){
        if (email && password) {
          axios.post('http://localhost:5000/login', {
            email: email,
            password: password,
          })
          .then(response => {
            console.log("Logged in Successful")
            setSuccess("Logged in Successful")
            setLogin(true)
          })
          .catch(error => {
            console.log("Wrong User or Password")
            setError("Wrong User or Password")
    
          });
        }else {
          alert("enter your credentials")
    
        }
      }

  
    

      const handleSubmit = (event) => {
        event.preventDefault();
        loginUser()
    
      };
    
    return (
        <div>
        {!login ? (
            <div>
            <h2>Login Form</h2>

            <form onSubmit={handleSubmit}>
            
           
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

            <Link to="/register">Register Here</Link>
            {success && <p style={{ color: 'green' }}>{success}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}





            </div>
        ):(
            <div>
            <h4>Dashboard</h4>
            </div>
        )}
    </div>
     
    )
}

export default Login