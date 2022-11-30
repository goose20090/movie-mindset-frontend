import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { StyledMovie } from "../styled-components/Movie.style";
import { StyledReviewContainer } from "../styled-components/ReviewContainer.style";

function MoviePage({className, children, movies}){
    const match = useRouteMatch()
    console.log(match)
    return (
        <div className={className}>
            {children}
            <Route path ={`${match.url}/:movieId`}>
                <StyledMovie id = "movie" movies= {movies}/>
                <StyledReviewContainer id = "review"/>
            </Route>
        </div>
    )
}

export default MoviePage