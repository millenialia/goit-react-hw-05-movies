import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { useEffect, useState, useRef, Suspense } from "react";
import { fetchMovieDetailsById } from "../../services/api"

import { Heading, MovieContainer, HeadingSecondary, List, Genres, Back, Container } from "./MovieDetails.styled";

const MovieDetails = () => {

  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')
  const [overview, setOverview] = useState('')
  const [genres, setGenres] = useState([])
  const [poster, setPoster] = useState('')

  const location = useLocation();
  const backPath =  useRef(location.state?.from ?? '/')

const { movieId } = useParams();

  useEffect(() => {

    const fetchMovie = async () => {
      try {
        const data = await fetchMovieDetailsById(movieId)
        const title = data.title
        const year = data.release_date.split('-')[0]
        const overview = data.overview
        const genres = data.genres
        const poster = data.poster_path

        setTitle(title)
        setYear(year)
        setOverview(overview)
        setGenres(genres)
        setPoster(poster)
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovie()
  }, [movieId])

  return (


    <div>
      <Container>

      <Back to={backPath.current}>Go back</Back>

      <MovieContainer>
      { poster ? <img src={''||`https://image.tmdb.org/t/p/w500${poster}`} alt="poster" /> : <p>poster</p>}

<div>
      <Heading>{title} ({year})</Heading>

      <HeadingSecondary>Overview</HeadingSecondary>
      <p>{overview}</p>

      <HeadingSecondary>Genres</HeadingSecondary>
      <Genres>
        {genres.map(({id, name}) =>{
          return (
            <li key={id}>{name}</li>
          )
        })}
          </Genres>
          </div>
        </MovieContainer>

      <List>
        <li>
            <Link to={"cast"}>Cast</Link>
        </li>
        <li>
            <Link to="reviews">Reviews</Link>
        </li>
        </List>

        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
        </Container>
    </div>


  )
}

export default MovieDetails;
