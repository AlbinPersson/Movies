import { Movie } from "types";
import { Category } from "types/Movie";

const movies: Movie[] = [
  {
    _id: "1",
    category: Category.MOVIE,
    title: "The Shawshank Redemption",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX674_.jpg",
    genre: {
      _id: "10",
      name: "Drama",
    },
  },
  {
    _id: "2",
    category: Category.MOVIE,
    title: "The Godfather",
    poster:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UY720_.jpg ",
    genre: {
      _id: "11",
      name: "Crime",
    },
  },
  {
    _id: "3",
    category: Category.SERIE,
    title: "The Dark Knight",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UY720_.jpg",
    genre: {
      _id: "12",
      name: "Action",
    },
  },
  {
    _id: "4",
    category: Category.MOVIE,
    title: "The Shawshank Redemption",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX674_.jpg",
    genre: {
      _id: "13",
      name: "Drama",
    },
  },
  {
    _id: "5",
    category: Category.MOVIE,
    title: "The Godfather",
    poster:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UY720_.jpg ",
    genre: {
      _id: "14",
      name: "Crime",
    },
  },
  {
    _id: "6",
    category: Category.SERIE,
    title: "The Dark Knight",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UY720_.jpg",
    genre: {
      _id: "15",
      name: "Action",
    },
  },
  {
    _id: "7",
    category: Category.MOVIE,
    title: "The Shawshank Redemption",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX674_.jpg",
    genre: {
      _id: "16",
      name: "Drama",
    },
  },
  {
    _id: "8",
    category: Category.MOVIE,
    title: "The Godfather",
    poster:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UY720_.jpg ",
    genre: {
      _id: "17",
      name: "Crime",
    },
  },
  {
    _id: "9",
    category: Category.SERIE,
    title: "The Dark Knight",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UY720_.jpg",
    genre: {
      _id: "18",
      name: "Action",
    },
  },
];

export function getMovies() {
  return movies;
}

export function getMovie(id: string) {
  return movies.find((m) => m._id === id);
}
