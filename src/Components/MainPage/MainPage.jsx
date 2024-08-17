import React from 'react'
import './MainPage.css'
import '../CardContainer/CardContainer.jsx'
import { Outlet, Link} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
const MainPage = ({topArticles,totalResults,toggleCategory, category}) => {
  const categories = ['General','Business','Entertainment','Health','Science','Sports','Technology']
  const selectionOptions = categories.map(category => {
    return (
      <option key={uuidv4()}value={category}>{category}</option>
    )
  })
  return (
    <>
      <div className='main'>
        <h2>{`List of Top ${totalResults} ${category} articles in the US today`}</h2>
        <div className='categories-wrapper'>
          <label htmlFor='categories'>Choose a news category:</label>
          <select name='categories' id='categories' onChange={(e) => toggleCategory(e.target.value)}>
            {selectionOptions}
          </select>
          <div className='btn-container'>
            <Link to='/'>
              <button>1</button>
            </Link>
            {topArticles.length > 20 && <Link to='/2'><button>2</button></Link>}
            {topArticles.length > 40 &&  <Link to='/3'><button>3</button></Link> }
            {topArticles.length > 60 && <Link to='/4'><button>4</button></Link>}
          </div>
        </div>
     </div>
    <Outlet/>
    </>
  )
}

export default MainPage
