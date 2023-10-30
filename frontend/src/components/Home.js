import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Votting App System</h1>

      <Link to='/registered-voters'> View Registered Voters</Link>
      <br/>
      <br/>
      <Link to='/vote-result'> View Vote Result </Link>
      <br/>
      <br/>
      <Link to='/candidates'> View Candidates</Link>
      <br/>
      <br/>
    </div>
  )
}

export default Home
