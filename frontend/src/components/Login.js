import React from 'react'
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div>
            <h1> Lets Login Here</h1>
            <form action="">
                <h1>First Name:</h1>
                <input placeholder='First Name' />
                <br />
                <h1>Last Name:</h1>
                <input placeholder='Last Name' />
                <br />
                <h1>Email Address</h1>
                <input placeholder='Email' />
                <br />
                <h1>Password</h1>
                <input placeholder='Password' />
                <br />
                <h1>Confirm Password</h1>
                <input placeholder='Confirm Password' />
            </form>

            Dont have an account? <Link to='/register'>Register Here</Link>
        </div>
    )
}

export default Login