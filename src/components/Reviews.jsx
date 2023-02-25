import { getMovieById } from 'moviesAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <h3>{author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
