import React from "react";
import "./style.css";
import MovieDetails from './components/MovieDetails'
import MovieList from './components/MovieList'

export default function App() {
  return (
    <div className="App">
      <h2>Redux Movies</h2>
      <div className="container">
        <MovieDetails />
        <MovieList />
      </div>
    </div>
  );
}
