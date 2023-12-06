import { useState } from "react";

const SearchMovie = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchMoviesAndSeries = async () => {
    const apiKey = 'ddf286270a985c5d9fa71c7e94ae8da7';
    const url = `https://api.themoviedb.org/3/search/multi?include_adult=false&language=en-US&page=1&query=${query}&api_key=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.results) {
        setResults(data.results);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  const handleClear = (e)=> { 
    setQuery('')
    setResults([])
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    searchMoviesAndSeries();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={handleChange} placeholder="Buscar" className="search-input" />
        {query && <button type="button" className="clear-button" onClick={handleClear}>X</button>}
        <button type="submit" className="search-button">🔎</button>
      </form>

      {results.length > 0 && (
        <div className="grid-container">
          {results.map((result) => (
            <div key={result.id} className="grid-item">
              {result.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/original${result.poster_path}`}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              )}
              <p>{result.title || result.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchMovie;


