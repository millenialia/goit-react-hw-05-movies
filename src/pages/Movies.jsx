import { useEffect, useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import { fetchMovieByName } from "../services/api"

export const Movies = () => {

  const [query, setQuery] = useState('')
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
  }, [searchParams])


  const onSubmit = (e) => {
    e.preventDefault()
    const query = e.target.query.value
    setSearchParams({query})
    setQuery(query)
    e.target.reset()
  }


  return (
    <div>
      <form action="movie-search" onSubmit={onSubmit}>
        <input type="text" name="query"/>
        <button type="submit">Search</button>
      </form>

      <ul>
        {movies.map(({ title, id }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: `/movies?query=${searchQuery}` }}>{title}</Link>
            </li>
          )
        })}
      </ul>

      <Outlet />
    </div>
  )
}
