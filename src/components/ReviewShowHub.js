import React from "react";
import { StyledEditReview } from "../component-styles/EditReview.style";
import useStarify from "../hooks/useStarify";

function ReviewShowHub({className, currentReview, isEditing, setIsEditing, setCurrentReview}){
    

    // destructure movie from currentReview
    const {movie} = currentReview
    const stars = useStarify(currentReview.rating)


    return(
        <div className={className}>
            <div id = "movie-info">
                <h2>{movie.title}</h2>
                <p> Released {movie.release_date}</p>
            </div>
            {isEditing?
             <StyledEditReview setIsEditing = {setIsEditing} currentReview = {currentReview} setCurrentReview= {setCurrentReview}/>
             :
             <div id ="review-content">
                <p>Your Rating: {stars} </p>
                <p>Your Comment: {currentReview.comment}</p>
            </div>}
            <div id = "options">
                <button onClick={()=>{setIsEditing((isEditing)=> !isEditing)}}>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}
export default ReviewShowHub