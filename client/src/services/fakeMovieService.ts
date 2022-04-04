import { Movie } from "types";
import { Category } from "types/Movie";

const movies: Movie[] = [
  {
    _id: "1",
    category: Category.MOVIE,
    desc: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
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
    desc: "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
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
    desc: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
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
    desc: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    title: "Inception",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX700_.jpg",
    genre: {
      _id: "13",
      name: "Action",
    },
  },
  {
    _id: "5",
    category: Category.MOVIE,
    desc: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    title: "The Godfather: Part II",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UY720_.jpg ",
    genre: {
      _id: "14",
      name: "Crime",
    },
  },
  {
    _id: "6",
    category: Category.SERIE,
    desc: "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
    title: "12 Angry Men",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_FMjpg_UX974_.jpg",
    genre: {
      _id: "15",
      name: "Crime",
    },
  },
  {
    _id: "7",
    category: Category.MOVIE,
    desc: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    title: "Schindler's List",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTg3MDc4ODgyOF5BMl5BanBnXkFtZTgwNzY1ODIyNjM@._V1_FMjpg_UX948_.jpg",
    genre: {
      _id: "16",
      name: "Biography",
    },
  },
  {
    _id: "8",
    category: Category.MOVIE,
    desc: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    title: "Pulp Fiction",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYjA2NGQzMDYtNWYwYS00NTIxLThmMzYtZmU3NDM2Y2E4M2M1XkEyXkFqcGdeQXVyNDIyNjA2MTk@._V1_FMjpg_UX535_.jpg ",
    genre: {
      _id: "17",
      name: "Crime",
    },
  },
  {
    _id: "9",
    category: Category.SERIE,
    desc: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    title: "Fight Club",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZjMxOWQ2Y2EtOTJiNy00MWJlLTkzMjAtOGU3NmE1NzhjZTIzXkEyXkFqcGdeQXVyMzUwODg3NTU@._V1_FMjpg_UX771_.jpg",
    genre: {
      _id: "18",
      name: "Drama",
    },
  },
];

export function getMovies() {
  return movies;
}

export function getMovie(id: string) {
  return movies.find((m) => m._id === id);
}
