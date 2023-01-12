import styled from "styled-components";
import MovieSearcher from "../../components//ReviewsPage/MovieSearcher"

export const StyledMovieSearcher = styled(MovieSearcher)`

h2{
    margin-left: 2.5%;


    #create-review-link{
        text-decoration: underline;
        cursor: pointer;
        position: relative;
        transition: color .4s ease-out;

        &:hover{
            color: lightgrey;
        }

}
}

#show-movies{
    border-top: solid 5px white;
    overflow: scroll;
    overflow-x: hidden;
    height: 48vh;

}

ul{
    margin-top: 1%;
}
li{
    list-style: none;
    cursor: pointer;
}

#search-bar{
    width: 100%;
    position: relative;
    top: -2px;
    font-family: inherit;
}

#close-button{
    float: right;
    margin-top: -10px;
    margin-right: 2.5%;
    cursor: pointer;
}



`