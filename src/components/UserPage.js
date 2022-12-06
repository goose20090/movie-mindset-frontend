import React from "react";

function UserPage({className, children}){
    return(
        <div className={className}>
            {children}
        </div>
    )
}

export default UserPage;