import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import movies from "routes/movies";

const app = express();

//middelware
app.use(cors());
app.use(express.json());

//routes
app.use("/api/movies", movies);

mongoose
  .connect("mongodb://localhost/movie")
  .then(() => console.log("connected to MongDB"))
  .catch((error) => console.log("could not connect to mongDB", error));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
