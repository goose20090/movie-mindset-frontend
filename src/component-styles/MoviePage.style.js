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

a{
    text-decoration: underline;
    color: white;
}
}

`