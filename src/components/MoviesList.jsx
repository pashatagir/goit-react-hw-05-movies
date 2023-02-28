import { Link, useLocation } from 'react-router-dom';
import {
  Container,
  CardsWrapper,
  MovieName,
  Images,
} from '../styles/MoviesList.styled';
import notFoundPoster from 'images/poster.jpg';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <Container>
      {movies.map(({ id, original_title, poster_path }) => (
        <CardsWrapper key={id}>
          <Link state={{ from: location }} to={`movies/${id}`}>
            <Images
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w342/${poster_path}`
                  : `${notFoundPoster}`
              }
              alt={original_title}
            />
            <MovieName>{original_title}</MovieName>
          </Link>
        </CardsWrapper>
      ))}
    </Container>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      original_title: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ).isRequired,
};
