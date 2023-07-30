import { Link, Outlet } from "react-router-dom";
import { fetchTrendingMovies } from "../services/api"
import { useEffect, useState } from "react";
import { Heading, List } from "./Home.styled";

export const Home = () => {

  const [movies, setMovies] = useState([])


  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await fetchTrendingMovies()
        const movies = data.results
        setMovies(movies)
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovies()
  }, []

  )

  return (
    <div>
      <Heading>Trending today</Heading>


      <List>
        {movies.map(({ title, id, poster_path
 }) => {
          return (
            <li key={id}>

              <Link to={`/movies/${id}`} state={{ from: "/" }}>
                <img src={'' || `https://image.tmdb.org/t/p/w500${poster_path}`} alt="poster" />
                <p>{title}</p>
              </Link>
        </li>


          )
        } )}
      </List>

      <Outlet />
    </div>
  )
}
