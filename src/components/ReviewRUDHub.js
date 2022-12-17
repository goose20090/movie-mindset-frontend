import React from "react";
import { StyledEditReview } from "../component-styles/EditReview.style";
import useStarify from "../hooks/useStarify";

function ReviewRUDHub({className, setIsRUDing, currentReview, isEditing, setIsEditing, onUpdateReview, onDelete}){
    

    // destructure movie from currentReview
    const {movie} = currentReview
    const stars = useStarify(currentReview.rating)


    function handleClick(){
        onDelete(currentReview)
    }
    return(
        <div className={className}>
            <div id = "movie-info">
                <h2>{movie.title}</h2>
                <p> Released {movie.release_date}</p>
                <h4 id = "close-button" onClick = {()=>setIsRUDing(false)}>X</h4>
            </div>
            {isEditing?
             <StyledEditReview currentReview = {currentReview} onUpdateReview = {onUpdateReview}/>
             :
             <div id ="review-content">
                <p>Your Rating: {stars} </p>
                <p>Your Comment: {currentReview.comment}</p>
            </div>}
            <div id = "options">
                <button onClick={()=>{setIsEditing((isEditing)=> !isEditing)}}>Edit</button>
                <button onClick= {handleClick}>Delete</button>
            </div>
        </div>
    )
}
export default ReviewRUDHub