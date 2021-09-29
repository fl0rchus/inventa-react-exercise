import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Boleto from "./views/Boleto";
import Home from "./views/Home";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/boleto">
        <Boleto />
      </Route>
    </Router>
  );
}

export default App;
