import React from 'react'
import './Card.css'
import { NavLink } from 'react-router-dom'
const Card = ({id, title, author, source, publishedAt, description, urlToImage}) => {
  const publishDate = new Date(publishedAt)
  const options = {month: 'long', day: '2-digit', year: 'numeric'}
  const formattedDate = publishDate.toLocaleDateString('en-US', options)
  return (
    <NavLink to={`/detail/${id}`} >
      <div className='card' key={id}>
          <div className='source-container'>
            {urlToImage? <img className='article-img'src={urlToImage} alt=''/> : 'No image to show'}
          </div>
        <div className='card-info-wrapper'>
          <h3 className='card-title'>{title}</h3>
          <p>{source.name}&nbsp;&nbsp;&nbsp;&nbsp;{author}&nbsp;&nbsp;&nbsp;&nbsp;{formattedDate}</p>
        </div>
      </div>
    </NavLink>
  )
}

export default Card
