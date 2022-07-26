import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError("");
    try {
      const response = await fetch("https://swapi.dev/api/films/");

      if (!response.ok) {
        //error handling depends on APIs
        throw new Error("Something went wrong here!");
      }
      const data = await response.json();

      const transformedMovies = data.results.map((movie) => {
        return {
          id: movie.episode_id,
          title: movie.title,
          openingText: movie.opening_crawl,
        };
      });
      setMovies(transformedMovies);
      setIsLoading(false);
    } catch (err) {
      setError(error.message);
    }
    setIsLoading(false); //always setLoading to false, when done with it...
  }, []);

  //make it refactored and not cluttered in the JSX
  let content = <p>Found no movies.</p>;
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]); //if fetchMoviesHandler pointer is added here it starts rerendering like crazy
  //solution to problem, add empty array at the end of the useCallback()
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
        {/* {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>No movies found...</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>} */}
      </section>
    </React.Fragment>
  );
}

export default App;
