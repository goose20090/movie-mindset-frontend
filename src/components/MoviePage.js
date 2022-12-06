import React, { useEffect } from "react";
import {StyledMovieList} from "../component-styles/MovieList.style"
import { useRouteMatch, Route } from "react-router-dom";
import Movie from "./Movie";
import RenderWrapper from "./RenderWrapper";

function MoviePage({className, children, movies, isLoading}){

    const match = useRouteMatch()


    return(
        <div className={className}>
            {children}
            <StyledMovieList>
                {isLoading? <h1>Loading...</h1> : RenderWrapper(movies)}
            </StyledMovieList>

            <Route path = {`${match.url}/:movieId`}>
                <Movie movies = {movies}/>
            </Route>
        </div>
    )
}

export default MoviePage;