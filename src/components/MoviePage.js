import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { StyledMovie } from "../component-styles/Movie.style";
import { StyledReviewContainer } from "../component-styles/ReviewContainer.style";

function MoviePage({className, children, movies, reviews, average}){

    const match = useRouteMatch()
    return (
        <div className={className}>
            {children}
            <Route path ={`${match.url}/:movieId`}>
                <StyledMovie id = "movie" movies= {movies} average = {average}/>
                <StyledReviewContainer id = "review" reviews = {reviews}/>
            </Route>
        </div>
    )
}

export default MoviePage