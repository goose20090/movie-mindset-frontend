import React from "react";

function CoolButton({buttonLabel, className, handleClick}){

    function onClick(){
        handleClick()
    }
    return(
        <div className={className}>
            <div className="button" onClick = {onClick}>
            <span className="button__mask"></span>
            <span className="button__text">{buttonLabel}</span>
            <span className="button__text button__text--bis">{buttonLabel}</span>
            </div>
        </div>
        );
    }

export default CoolButton