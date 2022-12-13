import React, {useEffect, useState} from "react";
import EditReview from "./EditReview";
import UserReview from "./UserReview";

function UserReviewShow({className, review, users}){

    const [isEditing, setIsEditing] = useState(false)


    const user = users.find((userObj)=>userObj.id === review.user_id)
    const {movie, id, rating, comment} = review
    const [reviewContent, setReviewContent] = useState({
        id: id,
        rating: rating,
        comment: comment
    })

    useEffect(()=>{
        setReviewContent({
            id: id,
            rating: rating,
            comment: comment
        })
        if (isEditing){setIsEditing(false)}
    }, [review])

    console.log(reviewContent)

    return(
        <div className={className}>
            <h1>{user.name}'s Review of {movie.title}</h1>
            {isEditing? <EditReview reviewContent = {reviewContent}/>: <UserReview user = {user} review = {review} setIsEditing= {setIsEditing}/>}
    </div>
    )
}

export default UserReviewShow;