import { useEffect, useState } from 'react'
import './App.css'
import getTopArticles from './APIcall'
import Header from './Components/Header/Header';
import MainPage from './Components/MainPage/MainPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [error, setError] = useState('');
  const [topArticles, setTopArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  useEffect(() => {
    getTopArticles()
    .then(data => {
      setTopArticles(data.articles)
      setTotalResults(data.totalResults)
  })
    .catch(err => setError(err.message))
  },[])
  return (
    <div>
      <Header/>
     {error && <p>{error}</p>}
     <Routes>
      <Route path='/' element={<MainPage topArticles={topArticles} totalResults={totalResults}/>}/>
     </Routes>
    </div>
  )


}

export default App
