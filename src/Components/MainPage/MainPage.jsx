import React from 'react'
import './MainPage.css'
import '../CardContainer/CardContainer.jsx'
import CardContainer from '../CardContainer/CardContainer.jsx'
const Main = ({topArticles,totalResults}) => {
  return (
    <div className='main'>
      <h2>{`List of top ${totalResults} articles in the US today`}</h2>
      {topArticles? <CardContainer topArticles={topArticles}/> : <p>No articles to show..</p>}
    </div>
  )
}

export default Main
