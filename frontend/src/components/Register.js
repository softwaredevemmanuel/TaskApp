import React from 'react'
import { Link } from "react-router-dom"

const Register = () => {
    return (
        <div>
            <h1>Register for me</h1>
            <form>
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


            Have an account? <Link to='/login'>Login Here</Link>
        </div>
    )
}

export default Register