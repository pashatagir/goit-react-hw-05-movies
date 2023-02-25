import { getMovieById } from 'moviesAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    getMovieById(`${movieId}/credits`).then(({ cast }) => {
      setCast(cast);
    });
  }, [movieId]);
  return (
    <ul>
      {cast.map(({ character, credit_id, name, profile_path }) => (
        <li key={credit_id}>
          <img
            src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
            alt={name}
          />
          <p>
            {name}({character})
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
