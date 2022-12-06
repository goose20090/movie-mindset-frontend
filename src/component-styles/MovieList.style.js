import styled from "styled-components";
import List from "../components/List";

export const StyledMovieList = styled(List)`

border: 5px solid white;
padding-right: 10px;
overflow: scroll;
overflow-x: hidden;
height: 50vw;

li{
    list-style: none;
    margin-left: 10px;
}

a{
    text-decoration: underline;
    color:white;
}
`