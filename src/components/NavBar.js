import React from "react";
import { StyledNavLink } from "../styled-components/NavBar.style"

function NavBar({className}){
    return (
        <div className={className}>
            <StyledNavLink to = "/" exact activeStyle={ {background:"darkred"}}>
                Home
            </StyledNavLink>
            <StyledNavLink to = "/movies" exact activeStyle={ {background:"darkred"}}>
                Movies
            </StyledNavLink>
        </div>
    )
}

export default NavBar