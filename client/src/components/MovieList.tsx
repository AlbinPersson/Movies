import styled from "styled-components";
import { useEffect, useState } from "react";
import { getMovies } from "services/fakeMovieService";
import { Movie } from "types";

function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const movies = getMovies();
    setMovies(movies);
  }, []);

  return (
    <Container>
      {movies.map((movie) => (
        <div>
          <Poster src={movie.poster} />
        </div>
      ))}
    </Container>
  );
}

export default MovieList;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 4px;
  margin: 16px;
`;

const Poster = styled.img`
  width: 300px;
  height: 150px;
  border-radius: 4px;
`;
