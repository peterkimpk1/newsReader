import React from 'react'
import { useParams } from 'react-router-dom'
import './DetailPage.css'
const DetailPage = ({topArticles}) => {
   const {id} = useParams()
   const singleArticle = topArticles.find(article => article.id === id)
   if (singleArticle) {
    var {title, urlToImage, description, url, author, publishedAt, content} = singleArticle
    const publishDate = new Date(publishedAt)
    const options = {month: 'long', day: '2-digit', year: 'numeric'}
    var formattedDate = publishDate.toLocaleDateString('en-US', options)
   }

  return (
    <section className='detail-page-container'>
        <div className='detail-info-wrapper'>
            <h2>{title}</h2>
            <p>Author: {author}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Date: {formattedDate} </p>
            {description ? <p>{description}</p> : <p>No description to show..</p>}
            {urlToImage ? <img className='detail-img'src={urlToImage} alt=''/> : <p>No image to show..</p>}
            <a href={url}>Link to Article</a>
            {content? <p className='content'>{content}</p> : <p>No content to show..</p>}
        </div>
    </section>
  )
}

export default DetailPage