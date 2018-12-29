import React from "react";
import ReactDOM from "react-dom";
import AppRoutes from "./routes";
import Link from "react-router-dom";
import "./styles.css";

function App() {
  return (
    <div>
      <AppRoutes />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
