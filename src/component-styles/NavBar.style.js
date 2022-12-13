import { NavLink } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import Login from "../components/Login";

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

export const StyledLogin = styled(Login)`
float: right;
display: flex;
gap: 10px;
margin-right: 25px;

h4{
    margin-left: -35%;
}
`