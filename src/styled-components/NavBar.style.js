import styled from "styled-components";
import NavBar from "../components/NavBar";
import {NavLink} from "react-router-dom";

export const StyledNavBar = styled(NavBar)`
&:hover{

}

`

export const StyledNavLink = styled(NavLink)`
display: inline-block;
width: 50px;
padding: 12px;
margin: 0 6px 6px;
background: blue;
text-decoration: none;
color: white
    `