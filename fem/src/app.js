import React from "react";
import ReactDOM from "react-dom";
import Results from "./results";
import { Router, Link } from "@reach/router";
import Details from "./details";
class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>;
        <Router>
              <Results path="/" />
              <Details path="/details/:id" />
        </Router>;
      </div>
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));