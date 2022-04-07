import joi from "joi";
import mongoose from "mongoose";
import { Movie as IMovie, Category, GenreName } from "types";
import { genreSchema } from "models/Genre";

const categories = Object.values<Category>(Category);
const genres = Object.values<GenreName>(GenreName);

export const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  poster: { type: String, required: true },
  genre: { type: genreSchema, required: true },
  category: { type: String, enum: categories, required: true },
});

export const Movie = mongoose.model("Movie", movieSchema);

export function validate(movie: IMovie) {
  const schema = joi.object({
    title: joi.string().required(),
    desc: joi.string().required(),
    poster: joi.string().required(),
    genre: joi
      .string()
      .valid(...genres)
      .required(),
    category: joi
      .string()
      .valid(...categories)
      .required(),
  });

  return schema.validate(movie);
}
