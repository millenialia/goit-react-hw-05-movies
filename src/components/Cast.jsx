import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieCreditsById } from "../services/api"


export const Cast = () => {

  const [cast, setCast] = useState([])

  const { movieId } = useParams();
  useEffect(() => {
const fetchCast = async () => {
  try {
    const { cast } = await fetchMovieCreditsById(movieId)
    setCast(cast)
      } catch (error) {
        console.log(error);
      }
    }

    fetchCast()
  }, [])

  return (
    <ul>
      {
        cast.map(({ name, character, profile_path, id }) => {
          return (
            <li key={id}>
              <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt="profile" />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          )
        })
      }
    </ul>
  )
}

