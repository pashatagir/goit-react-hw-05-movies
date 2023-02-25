import {
  CardWrapper,
  MovieName,
  Container,
} from 'components/MoviesList.styled';
import SearchBar from 'components/SearchBar';
import { getMovieByName } from 'moviesAPI';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('name') ?? '';
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovieByName(movieName).then(({ results }) => {
      setMovies([...results]);
    });
  }, [movieName]);

  const handleFormSubmit = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
    setMovies([]);
  };

  return (
    <main>
      <SearchBar value={movieName} onSubmit={handleFormSubmit} />
      <Container>
        {movies.map(({ id, original_title, poster_path }) => (
          <CardWrapper key={id}>
            <Link to={`${id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
                alt={original_title}
              />
              <MovieName>{original_title}</MovieName>
            </Link>
          </CardWrapper>
        ))}
        <Suspense>
          <Outlet />
        </Suspense>
      </Container>
    </main>
  );
};

export default Movies;
// src={poster_path?`https://image.tmdb.org/t/p/w342/${poster_path}`:`${notFound}`}
