import React from "react";
import useRender from "../hooks/useRender";

function RenderWrapper(data){
    const renderData = useRender(data)
    console.log(useRender(data))
    return(
        <>
            {renderData}
        </>
    )
}

export default RenderWrapper