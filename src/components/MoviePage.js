import React, { useState } from "react";
import {StyledMovieList} from "../component-styles/MovieList.style"
import { StyledRatingContainer } from "../component-styles/RatingContainer.style";
import { StyledRating } from "../component-styles/Rating.style";
import { StyledReview } from "../component-styles/StyledReview";
import { useRouteMatch, Route } from "react-router-dom";
import RenderWrapper from "./RenderWrapper";
import { StyledMovie } from "../component-styles/Movie.style";

function MoviePage({className, children, movies, isLoading}){

    const match = useRouteMatch()

    const [reviewShow, setReviewShow] = useState({})

    return(
        <div className={className}>
            {children}
            <StyledMovieList>
                {isLoading? <h1>Loading...</h1> : RenderWrapper(movies)}
            </StyledMovieList>

            <Route path = {`${match.url}/:movieId`}>
                <StyledMovie movies = {movies} setReviewShow= {setReviewShow}>
                    <StyledRatingContainer>
                        <StyledRating/>
                    </StyledRatingContainer>
                </StyledMovie>
                <StyledReview review= {reviewShow}/>
            </Route>
        </div>
    )
}

export default MoviePage;