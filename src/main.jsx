import React from 'react'
import ReactDOM from 'react-dom/client'
import Movie from './components/Movie.jsx'
import Series from './components/Series.jsx'
import TopMovie from './components/TopMovie.jsx'
import Topseries from './components/SeriesTop.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Movie />
    <TopMovie/>
    <Series />
    <Topseries/>
  </React.StrictMode>,
)
