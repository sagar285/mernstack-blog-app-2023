import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            <ul className='ul-text'>
               <Link to={"/"}> <li>Blog-App</li></Link>
                <div>
                <Link to={"/register"}> <li>Registration</li></Link>
                <Link to={"/login"}><li>Login</li></Link>
                </div>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar