import React from 'react'
import './CardContainer.css'
import Card from '../Card/Card'
import { v4 as uuidv4 } from 'uuid';
const CardContainer = ({topArticles}) => {
  const articleCards = topArticles.map(({title, author, urlToImage, publishedAt, description, source}) => {
    return (
      <Card
      key={uuidv4()}
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
      {articleCards}
    </div>
  )
}

export default CardContainer
