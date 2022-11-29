import styled from "styled-components";
import MovieList from "../components/MovieList";

export const StyledMovieList = styled(MovieList)`

border: 5px solid white;
width: 40%;
padding: 10px;
height: 800px;
overflow: scroll;
overflow-x: hidden;
display: inline-block;

li{
    list-style: none;
    margin: 2px;
    text-decoration: none;
}

`