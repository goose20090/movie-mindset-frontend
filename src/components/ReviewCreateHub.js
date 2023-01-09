import React, {useState} from "react";
import { StyledMovieCreater } from "../component-styles/MovieCreater.style";
import { StyledMovieSearcher } from "../component-styles/MovieSearcher.style";
import { StyledNewReviewForm } from "../component-styles/NewReviewForm.style";

function ReviewCreateHub({className, movies, onAddReview, currentUser, setIsRUDing, setIsCreatingReview}){

    const [isSearching, setIsSearching] = useState(true)
    const [isCreatingMovie, setIsCreatingMovie] = useState(false)
    const [reviewingMovie, setReviewingMovie] = useState("")

    function handleMovieClick(clickedMovieId){
        setIsSearching(!isSearching)
        let clickedMovie = [...movies].find((movie)=> movie.id === clickedMovieId)
        setReviewingMovie(clickedMovie)

    }
    return(
        <div className={className}>
            {isSearching? 
                isCreatingMovie? <StyledMovieCreater setIsCreatingMovie= {setIsCreatingMovie}/>:
                <StyledMovieSearcher setIsRUDing={setIsRUDing} handleMovieClick = {handleMovieClick} movies = {movies} setIsSearching= {setIsSearching} setIsCreatingMovie = {setIsCreatingMovie} setIsCreatingReview = {setIsCreatingReview}/>
            : 
            <StyledNewReviewForm setIsSearching = {setIsSearching} currentUser = {currentUser} reviewingMovie= {reviewingMovie} onAddReview = {onAddReview}/>}
        </div>
    )
}

export default ReviewCreateHub