import React from "react";
import { Router } from "@reach/router";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

function App() {
  return (
    <div className="App">
      <Router>
        <HomePage path="/" />
      </Router>
    </div>
  );
}

export default App;
