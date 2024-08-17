import React, { useState } from 'react'
import './Header.css'
const Header = ({filterResult}) => {
const [query, setQuery] = useState('')
  return (
    <nav>
      <h1>News Reader</h1>
      <label htmlFor='search'></label>
      <div>
        <input type='text' name='search' placeholder='Filter Articles' value={query} onChange={(e) => setQuery(e.target.value)}></input>
        <button onClick={() => filterResult(query)}>Filter</button>
      </div>
    </nav>
  )
}

export default Header
