import Navbar from "components/Navbar";
import MovieList from "./components/MovieList";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/">
          <MovieList />
        </Route>
        <Route path="/series" />
        <Route path="/movies" />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
