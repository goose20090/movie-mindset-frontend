import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { StyledUser } from "../component-styles/User.style";

function UserContainer({className, children, users, currentUsersReviews}){

    const match = useRouteMatch()
    return (
        <div className={className}>
            {children}
            <Route path = {`${match.url}/:userId`}>
                <StyledUser users = {users} currentUsersReviews= {currentUsersReviews}/>
            </Route>
        </div>
    )
}

export default UserContainer;