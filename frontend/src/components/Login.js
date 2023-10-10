import React from 'react'
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div>
            <h1> Lets Login Here</h1>
            <form action="">
                <h1>Email Address</h1>
                <input placeholder='Email' />
                <br />
                <h1>Password</h1>
                <input placeholder='Password' />
                <br />
            </form>

            Dont have an account? <Link to='/register'>Register Here</Link>
        </div>
    )
}

export default Login