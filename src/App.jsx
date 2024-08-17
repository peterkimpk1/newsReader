import { useEffect, useState } from 'react'
import './App.css'
import getTopArticles from './APIcall'
import Header from './Components/Header/Header';
import MainPage from './Components/MainPage/MainPage';
import { Route, Routes } from 'react-router-dom';
import {data} from './data.jsx'
import CardContainer from './Components/CardContainer/CardContainer'
import DetailPage from './Components/DetailPage/DetailPage'
function App() {
  const [error, setError] = useState('');
  const [topArticles, setTopArticles] = useState(data);
  const [totalResults, setTotalResults] = useState(0);
  const [category, setCategory] = useState('General');
  const [filterArticles, setFilteredArticles] = useState([])
  useEffect(() => {
    getTopArticles(category)
    .then(data => {
      setTopArticles(data.articles)
      setFilteredArticles(data.articles)
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
  return (
    <div>
      <Header filterResult={filterResult}/>
     {error && <p>{error}</p>}
     <Routes>
      <Route path='/' element={<MainPage topArticles={topArticles} totalResults={totalResults} toggleCategory={toggleCategory} category={category}/>}>
        <Route index element={<CardContainer topArticles={topArticles.slice(0,20)}/>}/>
        <Route path='2' element={<CardContainer topArticles={topArticles.slice(20,40)}/>}/>
        <Route path='3' element={<CardContainer topArticles={topArticles.slice(41,60)}/>}/>
        <Route path='4' element={<CardContainer topArticles={topArticles.slice(61,80)}/>}/>
      </Route>
      <Route path='/detail/:id' element={<DetailPage/>}/>
     </Routes>
    </div>
  )


}

export default App
