import React from "react";
import { useParams } from "react-router-dom";

function User({className, children, users}){
    const params = useParams()
    const currentUser = users[params.userId]
    return(
        <div className={className}>
            <div id = "name-and-avatar">
                <h1>{currentUser.name}</h1>
                <img src = {currentUser.avatar}></img>
            </div>
        </div>
    )
}

export default User;