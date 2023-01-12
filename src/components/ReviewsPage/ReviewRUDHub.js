import React from "react";
import { StyledEditReview } from "../../component-styles/ReviewsPage/EditReview.style";
import useStarify from "../../hooks/useStarify";
import { StyledSimpleButton } from "../../component-styles/Misc/SimpleButton.style";

function ReviewRUDHub({className, setIsRUDing, currentReview, isEditing, setIsEditing, onUpdateReview, onDelete}){
    

    // destructure movie from currentReview
    const {movie} = currentReview
    const stars = useStarify(currentReview.rating)


    function handleClick(){
        onDelete(currentReview)

        fetch(`http://localhost:9292/reviews/${currentReview.id}`, {
            method: "DELETE",
        })
        .then(res=>res.json())
        .then((res)=> console.log('deleted:', res))
    }
    return(
        <div className={className}>
            <div id = "movie-info">
                <h2>{movie.title}</h2>
                <h4 id = "close-button" onClick = {()=>setIsRUDing(false)}>X</h4>
            </div>
            {isEditing?
             <StyledEditReview currentReview = {currentReview} onUpdateReview = {onUpdateReview} handleClose = {()=>setIsRUDing(false)}/>
             :
             <>
                <div id ="review-content">
                    <p>Your Rating: {stars} </p>
                    <p>Your Comment: {currentReview.comment}</p>
                </div>
                <div id = "options">
                    <StyledSimpleButton handleClick={()=>{setIsEditing((isEditing)=> !isEditing)}} buttonLabel= "Edit"></StyledSimpleButton>
                    <StyledSimpleButton handleClick={handleClick} buttonLabel = "Delete"></StyledSimpleButton>
                </div>
            </>
            }
        </div>
    )
}
export default ReviewRUDHub