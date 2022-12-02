import React from "react";
import { useParams } from "react-router-dom";

function User({className, users, currentUsersReviews}){
    const params = useParams()
    const currentUser = users[params.userId]

    console.log(currentUsersReviews[0].review.id)
    return(
        <div className={className}>
            <div id = "name-and-avatar">
                <h1>{currentUser.name}</h1>
                <img src = {currentUser.avatar}></img>
            </div>
            <h2>{currentUser.name} has written {currentUsersReviews.length} reviews</h2>
            {currentUsersReviews.map((review)=> <p key = {review.review.id}> {review.movie.title}</p>)}
        </div>
    )
}

export default User;