import { useEffect, useState } from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';

import 'swiper/swiper-bundle.css';
import '../App.css';

SwiperCore.use([Navigation, Pagination]);

function SeriesTop() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getApiMovies = async () => {
      try {
        const apiKey = 'ddf286270a985c5d9fa71c7e94ae8da7';
        const endpoint = `https://api.themoviedb.org/3/tv/top_rated?language=es-US&page=${1}&api_key=${apiKey}`;

        const response = await fetch(endpoint);

        if (!response.ok) {
          throw new Error('Error al buscar los datos');
        }

        const data = await response.json();
        setMovies(data.results);
      } catch (err) {
        console.error(err);
      }
    };

    getApiMovies();
  }, []);

  const imgs = 'https://image.tmdb.org/t/p/w500';

  return (

    
    <div className="App">

    <h3>SERIES POPULARES TOP</h3>

      <Swiper
        spaceBetween={2}
        loop

        slidesPerView={5}
        navigation
        onSwiper={(swiper) => {
         console.log(swiper)
        }}
      >
        {movies.map((m, index) => (
          <SwiperSlide key={index}>
            <div className='movie-item'>
              <img src={`${imgs + m.poster_path}`} alt="poster" style={{ height: "250px", width:"200px"}} />
              <div className='overview'></div>
              <h6>Votación: {m.vote_average}</h6>
              <h3>{m.original_name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SeriesTop;



