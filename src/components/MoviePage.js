import React, { useState } from "react";
import { useRouteMatch, Route, NavLink} from "react-router-dom";
import { StyledMovie } from "../component-styles/Movie.style";
import { StyledReviewCapsule } from "../component-styles/ReviewCapsule.style";

function MoviePage({className, children, movies, isLoading}){

    const match = useRouteMatch()
    const [review, setReview] = useState({})

    function handleClick(e){
        setReview(movies[e.target.id].reviews[0])

    }

    const renderMovieLinks = Object.keys(movies).map((movieId)=>(
        <li key = {movieId}>
            <NavLink to = {`/movies/${movieId}`} onClick= {handleClick} id = {movieId}>
                {movies[movieId].title}
            </NavLink>
        </li>
    ))
    
    return(
        <div className={className}>
            <div id = "list">
                {isLoading? <h1>Loading...</h1> : renderMovieLinks}
            </div>

            <Route path = {`${match.url}/:movieId`}>
                <StyledMovie movies = {movies} setReview = {setReview}/>
                {review? <StyledReviewCapsule review = {review}/>: null}
            </Route>
        </div>
    )
}

export default MoviePage;