import styled from "styled-components";
import MovieSearcher from "../components/MovieSearcher";

export const StyledMovieSearcher = styled(MovieSearcher)`

#show-movies{
    border-top: solid 5px white;
    overflow: scroll;
    overflow-x: hidden;
    height: 48vh;

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