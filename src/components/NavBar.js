import React from "react";

function NavBar({children, className}){
    return(
        <div className={className}>
            {children}
        </div>
    )
}

export default NavBar;