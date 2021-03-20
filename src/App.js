import React from "react";
import Weather from "./Weather";

import './App.css';

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <div className="card-body"><Weather defaultCity="Dublin" /></div>
      <footer className="App-footer">
        This project was coded by <a href="https://www.linkedin.com/in/siobhankwhyte/" target="_blank" rel="noreferrer">Siobhan Whyte</a>
        <br />
        Open-sourced on <a href="https://github.com/SiobhanWhyte/final-react-project" target="_blank" rel="noreferrer">GitHub</a> and hosted on <a href="https://upbeat-knuth-8128d3.netlify.app/" target="_blank" rel="noreferrer">Netifly</a>
      </footer>
    </div>
      </div>
  );
}
