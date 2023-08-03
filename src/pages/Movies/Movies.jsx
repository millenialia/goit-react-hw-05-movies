import { useEffect, useState, Suspense } from "react";
import { Outlet, useSearchParams, useLocation } from "react-router-dom";
import { fetchMovieByName } from "../../services/api"
import MovieList from "components/MovieList/MovieList";

import { Form, Container  } from "./Movies.styles";

const Movies = () => {

  // const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])

  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("query") ?? ""

  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { results } = await fetchMovieByName(searchQuery)
        setMovies(results)
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovies()
  }, [searchParams, searchQuery])


  const onSubmit = (e) => {
    e.preventDefault()
    const query = e.target.query.value
    setSearchParams({query})
    // setQuery(query)
    e.target.reset()
  }


  return (
    <div>
      <Container>
      <Form action="movie-search" onSubmit={onSubmit}>
        <input type="text" name="query"/>
        <button type="submit">Search</button>
      </Form>

        <MovieList
          movies={movies}
          searchQuery={searchQuery}
          location={location}/>

     <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
    </div>
  )
}

export default Movies;
