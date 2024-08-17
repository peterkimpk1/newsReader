import { useEffect, useState } from 'react'
import './App.css'
import getTopArticles from './APIcall'
import Header from './Components/Header/Header';
import MainPage from './Components/MainPage/MainPage';
import { Route, Routes } from 'react-router-dom';
import {data} from './data.jsx'
import { v4 as uuidv4 } from 'uuid';
import CardContainer from './Components/CardContainer/CardContainer'
import DetailPage from './Components/DetailPage/DetailPage'
function App() {
  const [error, setError] = useState('');
  const [topArticles, setTopArticles] = useState(data);
  const [totalResults, setTotalResults] = useState(0);
  const [category, setCategory] = useState('General');
  const [filterArticles, setFilteredArticles] = useState(data)

  useEffect(() => {
    getTopArticles(category)
    .then(data => {
      const articleWithIDs = data.articles.map(article => {
        let uniqueID = uuidv4()
        return {...article, key:uniqueID, id:uniqueID}
      }).sort((a,b) => {
        return new Date(b.publishedAt) - new Date(a.publishedAt)
      })
      console.log(articleWithIDs)
      setTopArticles(articleWithIDs)
      setFilteredArticles(articleWithIDs)
      setTotalResults(data.totalResults)
  })
    .catch(err => setError(err.message))
  },[category])
  const toggleCategory = (category) => {
    setCategory(category)
  }
  const filterResult = (query) => {
    const result = filterArticles.filter(article => article.title.toLowerCase().includes(query))
    setTopArticles(result)
  }
  const addArticleIDs = (articles) => {
    setTopArticles(articles)
  }
  return (
    <div>
      <Header/>
     {error && <p>{error}</p>}
     <Routes>
      <Route path='/' element={<MainPage topArticles={topArticles} totalResults={totalResults} toggleCategory={toggleCategory} category={category} filterResult={filterResult}/>}>
        <Route index element={<CardContainer topArticles={topArticles.slice(0,20)}/>}/>
        <Route path='2' element={<CardContainer topArticles={topArticles.slice(20,40)}/>}/>
        <Route path='3' element={<CardContainer topArticles={topArticles.slice(41,60)}/>}/>
        <Route path='4' element={<CardContainer topArticles={topArticles.slice(61,80)}/>}/>
        <Route path='5' element={<CardContainer topArticles={topArticles.slice(81,100)}/>}/>
      </Route>
      <Route path='/detail/:id' element={<DetailPage topArticles={topArticles}/>}/>
     </Routes>
    </div>
  )


}

export default App
