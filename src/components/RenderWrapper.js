import React from "react";
import useRender from "../hooks/useRender";

function RenderWrapper(data){

    const renderData = useRender(data)
    
    return(
        <>
            {renderData}
        </>
    )
}

export default RenderWrapper