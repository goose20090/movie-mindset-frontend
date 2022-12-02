import React from "react";

function RatingContainer({children, className}){
    return(
        <div className={className}>
            {children}
        </div>
    )
}

export default RatingContainer; 