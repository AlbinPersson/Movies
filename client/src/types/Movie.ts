import { Genre } from "types/Genre";

export enum Category {
  MOVIE = "movie",
  SERIE = "serie",
}

export interface Movie {
  _id: string;
  title: string;
  poster: string;
  genre: Genre;
  category: Category;
}
