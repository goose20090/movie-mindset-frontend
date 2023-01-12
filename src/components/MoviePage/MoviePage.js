import React, { useState } from "react";
import { useRouteMatch, Route, useParams} from "react-router-dom";
import { StyledMovie } from "../../component-styles/MoviesPage/Movie.style";
import { StyledNestedNavLink } from "../../component-styles/MoviesPage/MoviePage.style";
import { StyledReviewCapsule } from "../../component-styles/MoviesPage/ReviewCapsule.style";
import useDocumentTitle from "../../hooks/useDocumentTitle";

function MoviePage({className, movies, isLoading}){

    useDocumentTitle('MovieMindset | Movies')

    const match = useRouteMatch()
    const [review, setReview] = useState({})

    function handleClick(e){
        setReview(movies[e.target.id].reviews[0])

    }

    const renderMovieLinks = Object.keys(movies).map((movieId)=>(
        <li key = {movieId}>
            <StyledNestedNavLink activeStyle = {{color: 'lightgrey', textDecoration: 'underline'}}to = {`/movies/${movieId}`} onClick= {handleClick} id = {movieId}>
                {movies[movieId].title}
            </StyledNestedNavLink>
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