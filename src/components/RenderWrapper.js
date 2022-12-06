import React from "react";
import useRender from "../hooks/useRender";

function RenderWrapper({data, setShowState, url, makeNavLinksBy}){

    const renderData = useRender(data, setShowState, url, makeNavLinksBy)
    
    return(
        <>
            {renderData}
        </>
    )
}

export default RenderWrapper