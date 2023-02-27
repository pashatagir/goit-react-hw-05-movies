import { getMovieById } from 'moviesAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Message } from './Cast.styled';

const anApologyMessage = 'Sorry, but there are currently no reviews!';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getMovieById(`${movieId}/reviews`).then(({ results }) => {
      setReviews(results);
    });
  }, [movieId]);
  return (
    <ul>
      {reviews?.length > 0 ? (
        reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h3>{author}</h3>
            <p>{content}</p>
          </li>
        ))
      ) : (
        <Message>{anApologyMessage}</Message>
      )}
    </ul>
  );
};

export default Reviews;
