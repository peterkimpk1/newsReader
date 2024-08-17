import { useEffect, useState } from 'react'
import './App.css'
import getTopArticles from './APIcall'
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

function App() {
  const [error, setError] = useState('');
  const [topArticles, setTopArticles] = useState([]);
  useEffect(() => {
    getTopArticles()
    .then(data => setTopArticles(data.articles))
    .catch(err => setError(err.message))
  },[])
  return (
    <div>
      <Header/>
     {error && <p>{error}</p>}
    </div>
  )


}

export default App
