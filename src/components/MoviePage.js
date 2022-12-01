import React, { useEffect } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { StyledMovie } from "../component-styles/Movie.style";
import { StyledReview } from "../component-styles/Review.style";

function MoviePage({className, children, movies, reviews, average, currentReview, setCurrentReview}){

    const match = useRouteMatch()
    return (
        <div className={className}>
            {children}
            <Route path ={`${match.url}/:movieId`}>
                <StyledMovie movies= {movies} average = {average} reviews = {reviews} setCurrentReview = {setCurrentReview}/>
                <StyledReview currentReview = {currentReview}/>
            </Route>
        </div>
    )
}

export default MoviePage