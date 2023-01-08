import React from "react";
import { StyledLogin, StyledNavLink } from "../component-styles/NavBar.style";

function NavBar({className, currentUser, users, setCurrentUser, handleAddToUsers}){

    return(
        <div className={className}>
            <StyledNavLink to = "/" exact activeStyle = {{background:"darkred"}}>Home</StyledNavLink>
            <StyledNavLink to = "/movies" activeStyle = {{background:"darkred"}}>Movies</StyledNavLink>
            {currentUser? <StyledNavLink to = "/reviews" exact activeStyle = {{background:"darkred"}}>My Reviews</StyledNavLink>: null}
            <StyledLogin users = {users} currentUser = {currentUser} setCurrentUser = {setCurrentUser} handleAddToUsers = {handleAddToUsers}/>
        </div>
    )
}

export default NavBar;