import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {

  return (
    <nav>
        <Link to={'/'}>
            <h1>News Reader</h1>
        </Link>
      
    </nav>
  )
}

export default Header
