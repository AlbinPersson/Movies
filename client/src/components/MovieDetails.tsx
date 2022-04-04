import { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { getMovie } from "services/fakeMovieService";
import styled from "styled-components";
import { Movie } from "types";

function MovieDetails() {
  const [movie, setMovie] = useState<Movie>();
  const { id: movieId } = useParams<{ id: string }>();
  const history = useHistory();

  useEffect(() => {
    const movie = getMovie(movieId);
    if (!movie) return history.push("/not-found");
    setMovie(movie);
  }, []);

  return (
    <Container>
      <div>
        <div>
          <h1>{movie?.title}</h1>
          <h2>{movie?.genre.name}</h2>
          <p>{movie?.desc}</p>
        </div>
      </div>
      <img src={movie?.poster}></img>
    </Container>
  );
}

export default MovieDetails;

const Container = styled.div`
  height: 86vh;
  width: 100%;

  & div {
    position: absolute;
    width: 100%;
    display: grid;
    justify-items: center;
    & div {
      margin-top: 64px;
      height: 400px;
      width: 50%;
      border-radius: 75px;
      background-color: #0000007f;
      & h1 {
        font-size: 50px;
        font-weight: 900;
        padding-top: 32px;
        align-self: center;

        text-align: center;
      }
      & p {
        width: 70%;
        margin-top: 16px;
      }
    }
  }

  & img {
    height: 100%;
    width: 100%;
    opacity: 10%;
  }
`;
