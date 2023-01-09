import React, { useState } from "react";
import {StyledMovieList} from "../component-styles/MovieList.style"
import { useRouteMatch, Route} from "react-router-dom";
import RenderWrapper from "./RenderWrapper";
import { StyledMovie } from "../component-styles/Movie.style";
import { StyledReviewCapsule } from "../component-styles/ReviewCapsule.style";

function MoviePage({className, children, movies, isLoading}){

    const match = useRouteMatch()
    const [review, setReview] = useState({})

    return(
        <div className={className}>
            {children}
            <StyledMovieList>
                {isLoading? <h1>Loading...</h1> : <RenderWrapper data = {movies} setShowState= {setReview} url = "movies" makeNavLinksBy = "title"/>}
            </StyledMovieList>

            <Route path = {`${match.url}/:movieId`}>
                <StyledMovie movies = {movies} setReview = {setReview}/>
                {review? <StyledReviewCapsule review = {review}/>: null}
            </Route>
        </div>
    )
}

export default MoviePage;