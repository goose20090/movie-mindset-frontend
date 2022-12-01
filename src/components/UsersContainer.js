import React from "react";

function UserContainer({className, children}){
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default UserContainer;