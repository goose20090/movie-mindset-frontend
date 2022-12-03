import React from "react";

function Page({className, children}){
    return(
        <div className={className}>
            {children}
        </div>
    )
}

export default Page;