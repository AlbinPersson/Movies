import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "components/Navbar";
import MovieList from "./components/MovieList";
import Movie from "components/MovieDetails";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/not-found">
          <h1>NOT FOUND</h1>
        </Route>
        <Route path="/:id">
          <Movie />
        </Route>
        <Route path="/">
          <MovieList />
        </Route>
        <Route path="/?category=series" />
        <Route path="/?category=movies" />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
