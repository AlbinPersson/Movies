import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "App";
import "index.css";
import "@fortawesome/fontawesome-free/css/all.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
