import React, {useState} from "react";
import UserReview from "./UserReview";

function UserReviewShow({className, review, users}){

    const [isEditing, setIsEditing] = useState(false)

    const user = users.find((userObj)=>userObj.id === review.user_id)
    const {movie} = review 
    return(
        <div className={className}>
            <h1>{user.name}'s Review of {movie.title}</h1>
            {isEditing? null: <UserReview user = {user} review = {review} setIsEditing= {setIsEditing}/>}
    </div>
    )
}

export default UserReviewShow;