import { Link, useLocation } from 'react-router-dom';
import { Container, CardWrapper, MovieName, Image } from './MoviesList.styled';
import notFoundPoster from 'images/poster.jpg';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <Container>
      {movies.map(({ id, original_title, poster_path }) => (
        <CardWrapper key={id}>
          <Link state={{ from: location }} to={`movies/${id}`}>
            <Image
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w342/${poster_path}`
                  : `${notFoundPoster}`
              }
              alt={original_title}
            />
            <MovieName>{original_title}</MovieName>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf.isRequired,
};
