import React, { useEffect, useState } from "react";
import { StyledReviewRUDHub } from "../component-styles/ReviewRUDHub.style";
import { StyledUserProfile } from "../component-styles/UserProfile.style";

function ReviewsPage({currentUser, className, handleReviewUpdate}){

    // state for which Review is shown in ReviewShowHub
    const [currentReview, setCurrentReview] = useState(false)

    // state for whether a review is currently being read, updated or deleted
    const [isRUDing, setIsRUDing] = useState(false)

    // state for whether that Review is being currently edited
    const [isEditing, setIsEditing] = useState(false)

    // state for whether a review is currently being created
    const [isCreating, setIsCreating] = useState(false)

    function onUpdateReview(updatedReviewObj){
        // Say that the editing is finished
        setIsEditing(!isEditing)
        // Update current Review in ReviewShowHub
        let updatedCurrentReview = currentReview
        updatedCurrentReview.rating = updatedReviewObj.rating
        updatedCurrentReview.comment = updatedReviewObj.comment
        setCurrentReview(updatedCurrentReview)

        // Pass up to higher component to implement change across other states
        handleReviewUpdate(updatedReviewObj)
    }

    function showClickedReview(id){
        // Check if Create Hub is being shown and hide if not
        if(isCreating){
            setIsCreating(false)
        }
        // Check if RUD Hub is being shown and show if not
        if(!isRUDing){
        setIsRUDing(true)}

        // Update review currently being read in RUD Hub
        let clickedReview = currentUser.reviews.find((review)=> review.id === id)
        setCurrentReview(clickedReview)
        setIsEditing(false)
    }


    function showCreateHub(){
        setIsCreating(true)
    }
    return (
        <div className={className}>
            <StyledUserProfile currentUser = {currentUser} handleClick= {showClickedReview}/>
            {isCreating? 
            <h1>Create Hub Here</h1>
            :
            isRUDing?
            <StyledReviewRUDHub setIsRUDing = {setIsRUDing} setonUpdateReview = {onUpdateReview} setCurrentReview = {setCurrentReview} currentReview = {currentReview} isEditing= {isEditing} setIsEditing = {setIsEditing}/>
            : 
            <div>
                <h2>Options</h2>
                <ul>
                    <li>
                        Click a Rating for more information/options
                    </li>
                    <li>
                        Click <span onClick = {showCreateHub} id = "create-hub-link">here</span> to write a new Review!
                    </li>
                </ul>
            </div>
            }
        </div>
    )
}

export default ReviewsPage
