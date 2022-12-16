import styled from "styled-components";
import MovieSearcher from "../components/MovieSearcher";

export const StyledMovieSearcher = styled(MovieSearcher)`

#show-movies{
    border-bottom: solid 5px white;
    border-top: solid 5px white;
    height: 250px;
    overflow: scroll;
    overflow-x: hidden;

}

ul{
    margin-top: 7.5%;
}
li{
    list-style: none;
    cursor: pointer;
}

#search-bar{
    width: 300px;
    position: absolute;
}

`