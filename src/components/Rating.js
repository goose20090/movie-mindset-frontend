import React from "react";
import useStarify from "../hooks/useStarify";

function Rating({className, review, setReview}){

    const {rating, user} = review

    function handleClick(){
        setReview(review)
    }

    return(
        <div className={className} onClick = {handleClick}>
           <p>
            {user.name}
            <br/>
             {useStarify(rating)}
           </p>
        </div>
    )
}

export default Rating;