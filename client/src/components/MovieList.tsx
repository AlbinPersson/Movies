import styled from "styled-components";
import qs from "query-string";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { getMovies } from "services/fakeMovieService";
import { Movie } from "types";

interface Props {
  searchQuery: string;
}

function MovieList({ searchQuery }: Props) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const history = useHistory();
  const { search } = useLocation();
  const { category: selectedCategory } = qs.parse(search);

  useEffect(() => {
    const movies = getMovies();
    setMovies(movies);
  }, []);

  let filtredMovies = selectedCategory
    ? movies.filter((m) => m.category === selectedCategory)
    : movies;

  filtredMovies = filtredMovies.filter((m) =>
    m.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
  );

  return (
    <Container>
      {filtredMovies.map((movie) => (
        <Poster
          key={movie._id}
          src={movie.poster}
          onClick={() => history.push(`/${movie._id}`)}
        />
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
  width: 200px;
  height: 150px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;
