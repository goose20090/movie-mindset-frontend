import React, { useEffect, useState } from "react";
import { StyledReviewCreateHub } from "../component-styles/ReviewCreateHub.style";
import { StyledReviewRUDHub } from "../component-styles/ReviewRUDHub.style";
import { StyledUserProfile } from "../component-styles/UserProfile.style";

function ReviewsPage({currentUser, className, handleReviewUpdate, movies, handleMoviesState}){

    // state for whether a review is currently being read, updated or deleted
    const [isRUDing, setIsRUDing] = useState(false)

    // state for which Review is shown read, updated or deleted
    const [currentReview, setCurrentReview] = useState(false)


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

        // // Pass up to higher component to implement change across other states
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

    function handleAddReview(newReview){

        handleMoviesState(newReview)
    }







    return (
        <div className={className}>
            <StyledUserProfile currentUser = {currentUser} handleClick= {showClickedReview}/>
            {isCreating? 
            <StyledReviewCreateHub currentUser = {currentUser} movies = {movies} handleAddReview = {handleAddReview}/>
            :
            isRUDing?
            <StyledReviewRUDHub setIsRUDing = {setIsRUDing} onUpdateReview = {onUpdateReview} setCurrentReview = {setCurrentReview} currentReview = {currentReview} isEditing= {isEditing} setIsEditing = {setIsEditing}/>
            : 
            <div>
                <h2>
                    Click one of your ratings for more info/options, or click  
                        <span onClick = {showCreateHub} id = "create-hub-link"> here </span> 
                    to write a new one!
                </h2>
            </div>}
        </div>
    )
}

export default ReviewsPage
