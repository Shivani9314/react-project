import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <nav>
         <Link to= "/login">Login</Link>
         <Link to= "/profile">Sigup</Link>
        </nav>
    </div>
  )
}

export default Home;