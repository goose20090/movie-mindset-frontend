import React from "react";
import useStarify from "../hooks/useStarify";

function Rating({className, review}){

    const {rating, user} = review

    const starsOfFive = useStarify(rating)

    return(
        <div className={className}>
           <p>
            {user.name}
            <br/>
             {starsOfFive}
           </p>
        </div>
    )
}

export default Rating;