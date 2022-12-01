import React from "react";

function List({children, className}){
    return(
        <div className={className}>
            {children}
        </div>
    )
}

export default List