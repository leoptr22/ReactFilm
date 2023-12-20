import { useState, useEffect } from 'react';

const Header = () => {
  const [bannerImage, setBannerImage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const ApiKey = 'ddf286270a985c5d9fa71c7e94ae8da7'; 

    const fetchRandomMovie = async () => {
      try {
        const tmdbResponse = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US&page=1`
        );
        const tmdbData = await tmdbResponse.json();

        const movies = tmdbData.results;
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];

        setBannerImage(`https://image.tmdb.org/t/p/original${randomMovie.poster_path}`);

        // Obtener detalles de la película seleccionada
        const detailsResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${randomMovie.id}?api_key=${ApiKey}&language=es-ES`
        );
        const details = await detailsResponse.json();
        setMovieDetails(details);
      } catch (error) {
        console.error('Error TMDb:', error);
      }
    };

    fetchRandomMovie();

    const intervalId = setInterval(() => {
      fetchRandomMovie();
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);


  const handleOpenModal = async () => {
    const ApiKey = 'ddf286270a985c5d9fa71c7e94ae8da7'; 

    // Si no hay detalles de la película, realiza una solicitud para obtenerlos
    if (!movieDetails) {
      try {
        const tmdbResponse = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US&page=1`
        );
        const tmdbData = await tmdbResponse.json();

        const movies = tmdbData.results;
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];

        // para obtener los detalles de la película 
        const detailsResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${randomMovie.id}?api_key=${ApiKey}&language=es-ES`        );
        const details = await detailsResponse.json();
        setMovieDetails(details);
      } catch (error) {
        console.error('Error de TMDb:', error);
      }
    }

    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="header-container">
      <div className="banner-container">
        <img src={bannerImage} alt="Banner Image" className="banner-image" />
        {movieDetails && (
          <div className="movie-buttons">
            <button className="trailer-button" >
              VER TRAILER
            </button>
            <button className="info-button" onClick={handleOpenModal}>
              INFO
            </button>
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{movieDetails?.title}</h2>
            <p>{movieDetails?.overview}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
