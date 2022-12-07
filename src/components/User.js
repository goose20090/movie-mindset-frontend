import React from "react";
import { useParams } from "react-router-dom";
import { StyledRating } from "../component-styles/Rating.style";

function User({className, users}){

    const params = useParams()
    const user = users[params.userId]
    return(
    <div className= {className}>
         <div id = "name-and-avatar">
                <h1>{user.name}</h1>
                <img alt = {`${user.name}'s avatar`}src = {user.avatar}></img>
            </div>
            <h2>{user.name} has written {user.reviews.length} reviews</h2>
            {user.reviews.map((review)=> <StyledRating key = {review.id} review = {review} title= {"movie"}/>)}
    </div>
    )
}

export default User