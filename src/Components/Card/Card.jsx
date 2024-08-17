import React from 'react'
import './Card.css'
const Card = ({title, author, source, publishedAt, description}) => {
  const publishDate = new Date(publishedAt)
  const options = {month: 'long', day: '2-digit', year: 'numeric'}
  const formattedDate = publishDate.toLocaleDateString('en-US', options)
  return (
    <div className='card'>
        <div className='source-container'>
          <p>{source.name}</p>
        </div>
      <div className='card-info-wrapper'>
        <h3>{title}</h3>
        <p>{author}&nbsp;&nbsp;&nbsp;&nbsp;{formattedDate}</p>
      </div>
    </div>
  )
}

export default Card
