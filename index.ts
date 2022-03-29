import express from "express";
import cors from "cors";
import movies from "routes/movies";
const app = express();

//middelware
app.use(cors());
app.use(express.json());

//routes
app.use("/api/movies", movies);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
