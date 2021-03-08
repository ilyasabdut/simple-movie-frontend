import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./component/Card";
import List from "./component/List";

function App() {
  const [resp, setMovieData] = useState({ movies: null, repos: null });

  useEffect(() => {
    const fetchData = async () => {
      // const respMovies = await axios("http://localhost:8080/api/movies");
      // const respTopten = await axios("http://localhost:8080/api/movies/top10");
      const respMovies = await axios("https://simple-movie-backend.herokuapp.com/api/movies");
      const respTopten = await axios("https://simple-movie-backend.herokuapp.com/api/movies/top10");

      setMovieData({
        topten: respTopten.data.data,
        movies: respMovies.data.data,
      });
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Ilyas Abduttawab</span>
      </nav>

      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <h2>TOP 10 Movies</h2>
            {resp.topten &&
              resp.topten.map((movie, index) => (
                <List movie={movie} key={index} />
              ))}
          </div>
          <div className="col-md-10">
            <h2>Discovery</h2>
            <div className="row">
              {resp.movies &&
                resp.movies.map((movie, index) => (
                  <Card movie={movie} key={index} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
