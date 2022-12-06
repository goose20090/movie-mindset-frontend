import React, { useEffect, useState } from "react";
import {StyledMovieList} from "../component-styles/MovieList.style"
import { StyledRatingContainer } from "../component-styles/RatingContainer.style";
import { StyledRating } from "../component-styles/Rating.style";
import { StyledReview } from "../component-styles/StyledReview";
import { useRouteMatch, Route, useParams } from "react-router-dom";
import RenderWrapper from "./RenderWrapper";
import { StyledMovie } from "../component-styles/Movie.style";

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
                <StyledReview review = {review}/>
            </Route>
        </div>
    )
}

export default MoviePage;