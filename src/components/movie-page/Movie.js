import React from "react";
import {useParams} from "react-router-dom"
import { StyledMovieRating } from "../../component-styles/MovieRating.style";
import { StyledMovieRatingContainer } from "../../component-styles/MovieRatingContainer.style";


function Movie({className, movies, average, reviews, setCurrentReview}){

    const params = useParams()
    const currentMovie = movies[params.movieId]

    return(
        <div className={className}>
            <h2 id = "title">{currentMovie.title}</h2>
            <div id = "info">
                <h4>{currentMovie.genre}</h4>
                <h4>{currentMovie.streaming_platform}</h4>
                <h4>{currentMovie.release_date}</h4>
                <h4>Average Rating From Users: {average %1 === 0 ? average: average.toFixed(2)}</h4>
            </div>
            <StyledMovieRatingContainer>
                {reviews.map((review)=> <StyledMovieRating key = {review.review.id} review = {review.review} user = {review.user} setCurrentReview = {setCurrentReview}/>)}
            </StyledMovieRatingContainer>
        </div>
    )
}

export default Movie;