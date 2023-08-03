
import { fetchTrendingMovies } from "../../services/api"
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Heading, Container } from "./Home.styled";
import MovieList from "components/MovieList/MovieList";


export const Home = () => {

  const location = useLocation();

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
      <Container>
        <Heading>Trending today</Heading>
        <MovieList movies={movies} location={location} />
        </Container>
    </div>
  )
}

export default Home;

