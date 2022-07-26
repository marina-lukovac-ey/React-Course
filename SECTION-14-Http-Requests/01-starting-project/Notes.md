# HTTP REQUESTS...

- Pro tip: Never connecting React App to the DB directly => Avoiding exposure of DB Credentials...

## API CALLS...

- fetching films and taking only desired values to set them to movieList

---

1. .then().then()

```
fetch("https://swapi.dev/api/films/")
      .then((res) => res.json())
      .then((data) => {
        const transformedMovies = data.results.map((movie) => {
          return {
            id: movie.episode_id,
            title: movie.title,
            openingText: movie.opening_crawl,
          };
        });
        setMovies(transformedMovies);
      });
```

---

2. async/await

```
const fetchMoviesHandler = async () => {
    const response = await fetch("https://swapi.dev/api/films/");
    const data = await response.json();
```

## ERROR HANDLING...

- useState... to set error to false in the begining...

```
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
    } catch (error) {
      setError(error.message);
    }
```

- some APIs send error data through JSON...
- error handling goes depending on that

## `useEffect()` for requests...
