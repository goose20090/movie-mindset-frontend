import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { StyledMovie } from "../styled-components/Movie.style";

function MoviePage({children, movies}){
    const match = useRouteMatch()
    console.log(match)
    return (
        <div>
            {children}
            <Route path ={`${match.url}/:movieId`}>
                <StyledMovie movies= {movies}/>
            </Route>
        </div>
    )
}

export default MoviePage