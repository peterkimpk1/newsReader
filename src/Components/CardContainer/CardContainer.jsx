import React from 'react'
import './CardContainer.css'
import Card from '../Card/Card'
import { v4 as uuidv4 } from 'uuid';
const CardContainer = ({topArticles}) => {

  const articleCards = topArticles.map(({key,id,title, author, urlToImage, publishedAt, description, source}) => {
    return (
      <Card
      key={key}
      id={id}
      title={title}
      author={author}
      urlToImage={urlToImage}
      publishedAt={publishedAt}
      description={description}
      source={source}
      />
    )
  })
  return (
    <div className='card-container'>
      {articleCards.length === 0 ? <h3 className='no-match-msg'>No matches shown..</h3> : articleCards}
    </div>
  )
}

export default CardContainer
