import { generatePath, Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import { getMovieById } from 'moviesAPI';
import notFoundPoster from 'images/poster.jpg';
import {
  CardWrapper,
  GoBackLink,
  Image,
  InfoWrapper,
  ItemLink,
  ListLink,
  Link,
} from './MoveDetails.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();

  useEffect(() => {
    getMovieById(movieId)
      .then(
        ({
          id,
          poster_path,
          original_title,
          overview,
          release_date,
          vote_average,
          genres,
        }) => {
          setMovie({
            id,
            poster_path,
            original_title,
            overview,
            release_date,
            vote_average,
            genres,
          });
        }
      )
      .catch(() =>
        toast.error(`Whoops, something went wrong! Please try again later!`)
      );
  }, [movieId]);

  const goBackLink = location?.state?.from ?? '/';

  const {
    id,
    poster_path,
    original_title,
    overview,
    release_date,
    vote_average,
    genres,
  } = movie;

  return (
    <main>
      <GoBackLink to={goBackLink}>Go back</GoBackLink>
      <CardWrapper>
        <Image
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w342/${poster_path}`
              : `${notFoundPoster}`
          }
          alt={original_title}
        />
        <InfoWrapper>
          <h2>
            {original_title} ({new Date(release_date).getFullYear()})
          </h2>
          <p>User scores: {Math.ceil(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres?.map(genre => genre.name).join(', ')}</p>
          <ListLink>
            <ItemLink>
              <Link
                state={{ from: location?.state?.from }}
                to={generatePath('cast', { id })}
              >
                Cast
              </Link>
            </ItemLink>
            <ItemLink>
              <Link
                state={{ from: location?.state?.from }}
                to={generatePath('reviews', { id })}
              >
                Reviews
              </Link>
            </ItemLink>
          </ListLink>
          <Suspense>
            <Outlet />
          </Suspense>
        </InfoWrapper>
      </CardWrapper>
      <ToastContainer />
    </main>
  );
};

export default MovieDetails;
