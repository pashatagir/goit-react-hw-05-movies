import { MoviesList } from 'components/MoviesList';
import { getTrendMovies } from 'moviesAPI';
import { useEffect, useState } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrendMovies().then(({ results }) => {
      setMovies([...results]);
    });
  }, []);
  return (
    <main>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </main>
  );
};

export default Home;
