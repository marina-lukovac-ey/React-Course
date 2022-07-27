import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-http-cb3c6-default-rtdb.europe-west1.firebasedatabase.app/movies.json"
      );
      // if (!response.ok) {
      //   throw new Error("Something went wrong!");
      // }

      const data = await response.json();
      console.log(data);
      const transformedMovies = [];
      for (const key in data) {
        transformedMovies.push({ id: key, ...data[key] });
      }

      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  const addMovieHandler = async () => {
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://react-http-cb3c6-default-rtdb.europe-west1.firebasedatabase.app/movies.json",
        {
          mode: "no-cors",
          method: "POST",
          body: JSON.stringify({
            title: "Movie title",
            // id: "3286472",
            release_date: "July 27 2022",
            opening_crawl: "Once upon a time...",
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
        //db generated data:
        //{"-N7yvHERZvQYD-DJzvvG":
        //  {"opening_crawl":
        //    "Once upon a time...",
        //    "release_date":"July 27 2022",
        //    "title":"Movie title"}}
      );
      if (response.type !== "opaque") {
        throw new Error("post request is not ok");
      }
      console.log(response);
      // const data = await response.json();
      // console.log(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

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

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
