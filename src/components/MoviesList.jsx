import { Link } from 'react-router-dom';
import { Container, CardWrapper, MovieName } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  return (
    <Container>
      {movies.map(({ id, original_title, poster_path }) => (
        <CardWrapper key={id}>
          <Link to={`movies/${id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
              alt={original_title}
            />
            <MovieName>{original_title}</MovieName>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};
