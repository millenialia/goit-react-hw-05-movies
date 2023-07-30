import { useEffect, useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import { fetchMovieByName } from "../services/api"

import { Form, List  } from "./Movies.styles";

export const Movies = () => {

  // const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])

  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("query") ?? ""

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
      <Form action="movie-search" onSubmit={onSubmit}>
        <input type="text" name="query"/>
        <button type="submit">Search</button>
      </Form>

      <List>
        {movies.map(({ title, id, poster_path }) => {
          return (
            poster_path &&
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: `/movies?query=${searchQuery}` }}>
                <img src={'' || `https://image.tmdb.org/t/p/w500${poster_path}`} alt="poster" />
                <p>{title}</p>
              </Link>
            </li>
          )
        })}
      </List>

      <Outlet />
    </div>
  )
}
