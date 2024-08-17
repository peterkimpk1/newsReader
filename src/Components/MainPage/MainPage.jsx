import React from 'react'
import './MainPage.css'
import '../CardContainer/CardContainer.jsx'
import CardContainer from '../CardContainer/CardContainer.jsx'
import { Outlet, Link, Route, Routes } from 'react-router-dom'
const MainPage = ({topArticles,totalResults,toggleCategory, category}) => {
  const categories = ['General','Business','Entertainment','Health','Science','Sports','Technology']
  const selectionOptions = categories.map(category => {
    return (
      <option value={category}>{category}</option>
    )
  })
  return (
    <>
 
      <div className='main'>
        <h2>{`List of top ${totalResults} ${category} articles in the US today`}</h2>
        <div className='categories-wrapper'>
          <label htmlFor='categories'>Choose a news category:</label>
          <select name='categories' id='categories' onChange={(e) => toggleCategory(e.target.value)}>
            {selectionOptions}
          </select>
        </div>
        <div className='btn-container'>
          <Link to={'/'}>
            <button>1</button>
          </Link>
          <Link to={'/2'}>
            <button>2</button>
          </Link>
          {(topArticles.length > 40 && topArticles.length < 60) ? <Link to='/3'><button>3</button></Link> : null  }
          {topArticles.length > 60 && <Link to='/4'><button>4</button></Link>}
        </div>
    </div>
    <Outlet/>
    </>
  )
}

export default MainPage
