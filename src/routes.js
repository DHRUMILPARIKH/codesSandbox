import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./common/home.component.js";
import About from "./common/about.component.js";
import Car from "./car/car.component.js";

export default function x() {
  return (
    <Router>
      <div>
        <Route path="/home" component={Home} />
        <Route path="/cars" component={Car} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}
