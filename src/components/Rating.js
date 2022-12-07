import React from "react";
import useStarify from "../hooks/useStarify";

function Rating({className, review, title, setReview}){

    const {rating} = review
    const titleObj = review[`${title}`] 
    let titleKey
    if (title == 'movie'){
        titleKey = 'title'
    }

    if (title == 'user'){
        titleKey = 'name'
    }
    
    function handleClick(){
        setReview(review)
    }



    return(
        <div className={className} onClick = {handleClick}>
           <p>
            {titleObj[titleKey]}
            <br/>
             {useStarify(rating)}
           </p>
        </div>
    )
}

export default Rating;