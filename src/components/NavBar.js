import React from "react";
import { StyledNavLink } from "../component-styles/NavBar.style"

function NavBar({className}){
    return (
        <div className={className}>
            <StyledNavLink to = "/" exact activeStyle={ {background:"darkred"}}>
                Home
            </StyledNavLink>
            <StyledNavLink to = "/movies" exact activeStyle={ {background:"darkred"}}>
                Movies
            </StyledNavLink>
            <StyledNavLink to ="/users" exact activeStyle={{background: "darkred"}}>
                Users
            </StyledNavLink>
            <StyledNavLink to ="/reviews" exact activeStyle ={{background: "darkred"}}>
                My Reviews
            </StyledNavLink>
        </div>
    )
}

export default NavBar