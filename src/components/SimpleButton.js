import React from "react";

function SimpleButton({className, buttonLabel, handleClick}){
    return(
        <button className={className} onClick = {handleClick}>
            {buttonLabel}
        </button>
    )
}
export default SimpleButton;