import { NavLink } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import Login from "../components/Login";

export const StyledNavBar = styled(NavBar)`
`

export const StyledNavLink = styled(NavLink)`

margin: 2%



`

export const StyledLogin = styled(Login)`
float: right;
display: flex;
gap: 10px;
margin-right: 25px;
h4{
    margin-left: -35%;
}

select{
    font-family: inherit;
}
`