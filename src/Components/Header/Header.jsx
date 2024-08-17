import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <nav>
      <h1>News Reader</h1>
      <label htmlFor='search'></label>
      <input type='text' name='search' placeholder='Search Articles'></input>
    </nav>
  )
}

export default Header
