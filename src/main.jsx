import React from 'react'
import ReactDOM from 'react-dom/client'
import Movie from './components/Movie.jsx'
import Series from './components/Series.jsx'
import TopMovie from './components/TopMovie.jsx'
import Topseries from './components/SeriesTop.jsx'
import Header from './components/Header.jsx'
import './index.css'
import Clima from './components/clima.jsx'
import SearchMovie from './components/Search.jsx'
import Page from './components/Relato.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Clima />

  <SearchMovie/>
    <Header/>
    <Page/>

    <Movie />
    <TopMovie/>
    <Series />
    <Topseries/>
  </React.StrictMode>,
)
