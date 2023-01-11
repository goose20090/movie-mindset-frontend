import { NavLink } from "react-router-dom";
import styled from "styled-components";
import MoviePage from "../components/MoviePage";

export const StyledMoviePage = styled(MoviePage)`

display: flexbox;
justify-content: flex-start;
gap: 5%;
margin: 2%;

#list{
    border: 5px solid white;
padding-right: 10px;
overflow: scroll;
overflow-x: hidden;
height: 40vw;


li{
    list-style: none;
    margin-left: 10px;
}

}

`

export const StyledNestedNavLink= styled(NavLink)`

color: white;
position: relative;
text-decoration: none;
transition: color .4s ease-out;

&:hover{
    color: lightgrey;
    text-decoration: none;
}
::after{
    border-top: .1em solid white;
    content: "";
    position: absolute;
    right: 100%;
    bottom: 0.1em;
    left: 0;

    transition: right .4s cubic-bezier(0,.5,0,1), border-color .4s ease-out;
}

&:hover::after{
    border-color: grey;
    right:0;
}


`