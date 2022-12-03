import { NavLink } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/NavBar";

export const StyledNavBar = styled(NavBar)`

`

export const StyledNavLink = styled(NavLink)`
display: inline-block;
width: fit-content;
padding: 12px;
margin: 0 6px 6px;
background: red;
text-decoration: none;
color: white;
`