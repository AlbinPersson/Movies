import { Route, Switch, Redirect } from "react-router-dom";
import { useState } from "react";
import Navbar from "components/Navbar";
import MovieList from "./components/MovieList";
import MovieDetails from "components/MovieDetails";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div>
      <Navbar searchQuery={searchQuery} onSearch={setSearchQuery} />
      <Switch>
        <Route path="/not-found">
          <h1>NOT FOUND</h1>
        </Route>
        <Route path="/:id">
          <MovieDetails />
        </Route>
        <Route path="/">
          <MovieList searchQuery={searchQuery} />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;

{
  /* <Route path="/?category=series" />
        <Route path="/?category=movies" /> */
}
