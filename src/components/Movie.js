import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { MovPgStyledRating } from "../component-styles/Rating.style";
import { StyledRatingContainer } from "../component-styles/RatingContainer.style";

function Movie({className, movies, setReview}){
    const params = useParams()
    const movie = movies[params.movieId]
    const reviews = movie.reviews

    function handleClick(id){
        setReview(reviews.find((review)=> review.id === id))
    }

    return(
        <div className= {className}>
            <h2>{movie.title}</h2>
            <div id = "info">
                <h4>{movie.genre}</h4>
                <h4>{movie.streaming_platform}</h4>
                <h4>{movie.release_date}</h4>
            </div>
            <StyledRatingContainer id = "movie-ratings">
                {reviews.map((review)=><MovPgStyledRating key = {review.id} review= {review} setReview = {setReview} title= {"user"} handleClick= {handleClick}/>)}
            </StyledRatingContainer>
        </div>
    )
}

export default Movie