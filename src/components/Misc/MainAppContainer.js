import React from "react";

function MainAppContainer({children, className}){
    return(
        <div className={className}>
            {children}
        </div>
)}

export default MainAppContainer