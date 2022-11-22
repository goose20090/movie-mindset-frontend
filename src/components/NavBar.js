import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <>
            <NavLink to = "/" exact>
                Home
            </NavLink>
            <NavLink to = "/movies" exact>
                Movies
            </NavLink>
        </>
    )
}

export default NavBar