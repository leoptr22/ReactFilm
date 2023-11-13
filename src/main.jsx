import React from 'react'
import ReactDOM from 'react-dom/client'
import Movie from './Movie.jsx'
import Series from './Series.jsx'
import TopMovie from './TopMovie.jsx'
import Topseries from './SeriesTop.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Movie />
    <TopMovie/>
    <Series />
    <Topseries/>
  </React.StrictMode>,
)
