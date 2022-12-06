import React from "react";
import useRender from "../hooks/useRender";

function RenderWrapper({movies, setReview}){

    const renderData = useRender(movies, setReview)
    
    return(
        <>
            {renderData}
        </>
    )
}

export default RenderWrapper