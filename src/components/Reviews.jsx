import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieReviewsById } from "../services/api"



export const Reviews = () => {

  const [reviews, setReviews] = useState([])

  const { movieId } = useParams();

useEffect(() => {
const fetchReviews = async () => {
  try {
    const {results}  = await fetchMovieReviewsById(movieId)
    setReviews(results)
      } catch (error) {
        console.log(error);
      }
    }

    fetchReviews()
  }, [])

  return (


    <ul>
      {reviews.map(({ author, content, id }) => {
        return (
          <li key={id}>
            <p>
              Author: {author}
            </p>
            <p>
              {content}
            </p>
          </li>
        )
      })}
    </ul>
  )
}

