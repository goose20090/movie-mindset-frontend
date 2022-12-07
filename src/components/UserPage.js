import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { StyledUserList } from "../component-styles/UserList.style";
import { StyledUser } from "../component-styles/User.style";
import RenderWrapper from "./RenderWrapper";

function UserPage({className, children, isLoading, users}){

    function placeHolder(e){
        console.log(e)
    }
    const match = useRouteMatch()
    return(
        <div className={className}>
            {children}
            <StyledUserList>
                {isLoading? <h1>Loading...</h1> : <RenderWrapper data = {users} setShowState= {placeHolder} url = "users" makeNavLinksBy= "name"/>}
            </StyledUserList>
            <Route path = {`${match.url}/:userId`}>
                <StyledUser users = {users}/>
            </Route>
        </div>
    )
}

export default UserPage;