import React from "react";
import useStarify from "../hooks/useStarify";

function Rating({className, review, title, handleClick}){

    const {rating} = review
    const titleObj = review[`${title}`] 
    let titleKey
    if (title === 'movie'){
        titleKey = 'title'
    }

    if (title === 'user'){
        titleKey = 'name'
    }

    function passReviewId(){
        handleClick(review.id)
    }
    
    return(
        <div className={className} onClick= {passReviewId}>
           <p>
            {titleObj[titleKey]}
            <br/>
             {useStarify(rating)}
           </p>
        </div>
    )
}

export default Rating;