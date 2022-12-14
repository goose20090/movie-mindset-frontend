import React from "react"
import { RvPgStyledRating } from "../component-styles/Rating.style"

function UserProfile({className, currentUser}){

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
            <div>
                {reviews.map((review)=> <RvPgStyledRating key = {review.id} title = {"movie"} review = {review} handleClick = {()=>{}}/>)}
            </div>
        </div>
    )
}

export default UserProfile
