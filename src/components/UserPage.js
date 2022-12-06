import React from "react";
import { StyledUserList } from "../component-styles/UserList.style";
import RenderWrapper from "./RenderWrapper";

function UserPage({className, children, isLoading, users}){

    function placeHolder(e){
        console.log(e)
    }
    return(
        <div className={className}>
            {children}
            <StyledUserList>
                {isLoading? <h1>Loading...</h1> : <RenderWrapper data = {users} setShowState= {placeHolder} url = "users" makeNavLinksBy= "name"/>}
            </StyledUserList>
        </div>
    )
}

export default UserPage;