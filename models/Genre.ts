import joi from "joi";
import mongoose from "mongoose";
import { Genre as IGenre } from "types";

export const genreSchema = new mongoose.Schema({
  name: { type: String, minlength: 2, required: true },
});

export const Genre = mongoose.model("Genre", genreSchema);

export function validate(genre: IGenre) {
  const schema = joi.object({
    name: joi.string().min(2).required(),
  });

  return schema.validate(genre);
}
