import React, {useState} from "react";
import { StyledMovieSearcher } from "../component-styles/MovieSearcher.style";
import { StyledNewReviewForm } from "../component-styles/NewReviewForm.style";

function ReviewCreateHub({className, movies, onAddReview, currentUser}){

    const [isSearching, setIsSearching] = useState(true)
    const [reviewingMovie, setReviewingMovie] = useState("")

    function handleMovieClick(clickedMovieId){
        setIsSearching(!isSearching)
        let clickedMovie = [...movies].find((movie)=> movie.id === clickedMovieId)
        setReviewingMovie(clickedMovie)

    }
    return(
        <div className={className}>
            {isSearching?
            <StyledMovieSearcher handleMovieClick = {handleMovieClick} movies = {movies}/>
            : 
            <StyledNewReviewForm setIsSearching = {setIsSearching} currentUser = {currentUser} reviewingMovie= {reviewingMovie} onAddReview = {onAddReview}/>}
        </div>
    )
}

export default ReviewCreateHub