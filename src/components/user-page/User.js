import React from "react";
import { useParams } from "react-router-dom";
import { StyledUserMovie } from "../../component-styles/UserMovie.style";

function User({className, users, currentUsersReviews, setCurrentReview}){
    const params = useParams()
    const currentUser = users[params.userId]

    return(
        <div className={className}>
            <div id = "name-and-avatar">
                <h1>{currentUser.name}</h1>
                <img alt = {`${currentUser.name}'s avatar`}src = {currentUser.avatar}></img>
            </div>
            <h2>{currentUser.name} has written {currentUsersReviews.length} reviews</h2>
            {currentUsersReviews.map((movieReviewObj)=> <StyledUserMovie key = {currentUsersReviews.indexOf(movieReviewObj)} movieReviewObj = {movieReviewObj} setCurrentReview= {setCurrentReview}/>)}
        </div>
    )
}

export default User;