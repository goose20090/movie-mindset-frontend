import React from "react";
import { StyledEditReview } from "../../component-styles/ReviewsPage/EditReview.style";
import useStarify from "../../hooks/useStarify";
import { StyledSimpleButton } from "../../component-styles/Misc/SimpleButton.style";
import { toast } from "react-toastify";

function ReviewRUDHub({className, setIsRUDing, currentReview, isEditing, setIsEditing, onUpdateReview, onDelete}){
    

    const {movie} = currentReview
    const stars = useStarify(currentReview.rating)

    // Send Review Delete request to backend and pass up to App component to handle change to relevant state values
    function handleClick(){
        onDelete(currentReview)

        fetch(`http://localhost:9292/reviews/${currentReview.id}`, {
            method: "DELETE",
        })
        .then(res=>res.json())
        .then((res)=> {
          toast(`Your review of '${res.movie.title}' has been deleted`,{
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        })
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