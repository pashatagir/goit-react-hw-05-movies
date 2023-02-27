import { getMovieById } from 'moviesAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import notFoundPhotoProfile from 'images/avatar.png';
import {
  CastImage,
  CastItem,
  CastList,
  CastName,
  Message,
} from './Cast.styled';

const anApologyMessage =
  'Sorry, but there is currently no information about the cast!';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    getMovieById(`${movieId}/credits`).then(({ cast }) => {
      setCast(cast);
    });
  }, [movieId]);
  return (
    <CastList>
      {cast?.length > 0 ? (
        cast.map(({ character, credit_id, name, profile_path }) => (
          <CastItem key={credit_id}>
            <CastImage
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                  : `${notFoundPhotoProfile}`
              }
              alt={name}
            />
            <CastName>
              {name} ({character})
            </CastName>
          </CastItem>
        ))
      ) : (
        <Message>{anApologyMessage}</Message>
      )}
    </CastList>
  );
};

export default Cast;
