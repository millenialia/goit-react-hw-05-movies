import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieDetailsById } from "../services/api"

export const MovieDetails = () => {

  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')
  const [overview, setOverview] = useState('')
  const [genres, setGenres] = useState([])
  const [poster, setPoster] = useState('')

  const location = useLocation();
  const backPath = location.state?.from ?? '/movies'

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

      <Link to={backPath}>Go back</Link>

      { poster ? <img src={''||`https://image.tmdb.org/t/p/w500${poster}`} alt="poster" /> : <p>poster</p>}


      <h1>{title} ({year})</h1>

      <h2>Overview</h2>
      <p>{overview}</p>

      <h2>Genres</h2>
      <ul>
        {genres.map(({id, name}) =>{
          return (
            <li key={id}>{name}</li>
          )
        })}
      </ul>

      <ul>
        <li>
            <Link to={"cast"}>Cast</Link>
        </li>
        <li>
            <Link to="reviews">Reviews</Link>
        </li>
      </ul>

      <Outlet />
    </div>


  )
}
