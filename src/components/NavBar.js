import React from "react";
import { StyledLogin, StyledNavLink } from "../component-styles/NavBar.style";
import CoolButton from "../CoolButton";

function NavBar({className, currentUser, users, setCurrentUser, handleAddToUsers}){

    return(
        <div className={className}>
            <StyledNavLink to = "/" exact>{<CoolButton buttonLabel={"Home"}></CoolButton>}</StyledNavLink>
            <StyledNavLink to = "/movies">{<CoolButton buttonLabel={"Movies"}/>}</StyledNavLink>
            {currentUser? <StyledNavLink to = "/reviews">{<CoolButton buttonLabel={"My Reviews"}/>} </StyledNavLink>: null}
            <StyledLogin users = {users} currentUser = {currentUser} setCurrentUser = {setCurrentUser} handleAddToUsers = {handleAddToUsers}/>
        </div>
    )
}

export default NavBar;