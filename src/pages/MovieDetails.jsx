import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import { getMovieById } from 'moviesAPI';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();

  useEffect(() => {
    getMovieById(movieId).then(
      ({ poster_path, original_title, overview, release_date }) => {
        setMovie({ poster_path, original_title, overview, release_date });
      }
    );
  }, [movieId]);

  const goBackLink = location?.state?.from ?? '/';
  const { poster_path, original_title, overview, release_date } = movie;

  return (
    <main>
      <Link to={goBackLink}>Go back</Link>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
          alt={original_title}
        />
        <div>
          <h2>
            {original_title}({new Date(release_date).getFullYear()})
          </h2>
          <p>{overview}</p>
        </div>
      </div>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
