import React from "react";
import { useParams } from "react-router-dom";
import { StyledRating } from "../component-styles/Rating.style";
import { StyledRatingContainer } from "../component-styles/RatingContainer.style";

function User({className, users, setReview}){

    const params = useParams()
    const user = users[params.userId]
    return(
    <div className= {className}>
        <div id = "container">
            <div id = "name-and-avatar">
                <h2>{user.name}</h2>
                <img alt = {`${user.name}'s avatar`}src = {user.avatar}></img>
                <p>{user.reviews.length} reviews</p>
            </div>
            <div id = "ratings-container">
            {/* {user.reviews.map((review)=> <StyledRating key = {review.id} review = {review} setReview = {setReview}title= {"movie"}/>)} */}
            </div>
         
        </div>
    </div>
    )
}

export default User