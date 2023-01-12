import React from "react"
import { RvPgStyledRating } from "../../component-styles/Misc/Rating.style"

function UserProfile({className, currentUser, handleClick}){

    const {reviews} = currentUser
    
    return(
        <div className= {className} id = "container">
            <div id = "name-and-avatar">
                <h2>{currentUser.name}</h2>
                <img alt = {`${currentUser.name}'s avatar`}src = {currentUser.avatar}></img>
            </div>
            <div id = "review-count">
                <p>{currentUser.reviews.length} reviews</p>
            </div>
                {reviews.map((review)=> <RvPgStyledRating className = "user-profile-rating" key = {review.id} title = {"movie"} review = {review} handleClick = {handleClick}/>)}
            <div>
            </div>
        </div>
    )
}

export default UserProfile
