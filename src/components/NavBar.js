import React from "react";
import { StyledNavLink } from "../styled-components/NavBar.style"

function NavBar(){
    return (
        <>
            <StyledNavLink to = "/" exact activeStyle={ {background:"darkblue"}}>
                Home
            </StyledNavLink>
            <StyledNavLink to = "/movies" exact activeStyle={ {background:"darkblue"}}>
                Movies
            </StyledNavLink>
        </>
    )
}

export default NavBar