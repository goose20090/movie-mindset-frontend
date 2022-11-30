import styled from "styled-components";
import MovieList from "../components/MovieList";

export const StyledMovieList = styled(MovieList)`

border: 5px solid white;
padding-right: 10px;
overflow: scroll;
overflow-x: hidden;
grid-row: span 2;
height: 65%;

li{
    list-style: none;
    margin-left: -25px;
}

a{
    text-decoration: underline;
    color:white;
}
`