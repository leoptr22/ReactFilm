import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesxpagina] = useState(12); 

  const [movie, setMovie] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const getApiMovie = async () => {
      try {
        const apiKey = 'ddf286270a985c5d9fa71c7e94ae8da7';
        const endpoint = `https://api.themoviedb.org/3/movie/popular?language=es-US&page=${currentPage}&api_key=${apiKey}`;

        const response = await fetch(endpoint);

        if (!response.ok) {
          throw new Error('Error en buscar los datos');
        }

        const data = await response.json();
        setMovie(data.results);
        setTotalPages(data.total_pages);
      } catch (err) {
        console.error(err);
      }
    };

    getApiMovie();
  }, [currentPage]);

  const imgs = 'https://image.tmdb.org/t/p/w500';

  const goToPreviousPage = () => {
    setCurrentPage(currentPage === 1 ? 1 : currentPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage(currentPage === totalPages ? totalPages : currentPage + 1);
  };

  const moviesToShow = movie.slice(0, moviesxpagina);

  return (
    <div className="App">
    <h6>Pagina en produccion</h6>
      <h1>ReactFilm</h1>
      <h3>Rama QA</h3>
      <h2>Películas Populares de IMDb</h2>
      <div className='movie-container'>
        {moviesToShow.map((m, index) => (
          <div key={index} className='movie-item'>
            <img src={`${imgs + m.poster_path}`} alt="poster" style={{ height: "300px" }} />
            <div className='overview'>
              <h3>{m.title}</h3>
              <h6>{m.overview}</h6>
            </div>
          </div>
        ))}
      </div>

      <div className='pagination'>
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>Atrás</button>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>Adelante</button>
      </div>
    </div>
  );
}

export default App;
