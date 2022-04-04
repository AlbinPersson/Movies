import { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { getMovie } from "services/fakeMovieService";
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

  return <div>{movie?.title}</div>;
}

export default MovieDetails;
