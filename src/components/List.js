import React from "react";

function List({className, children}){
   return(
   <div className={className}>
        {children}
    </div>
)}

export default List;