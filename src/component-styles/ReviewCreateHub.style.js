import styled from "styled-components";
import ReviewCreateHub from "../components/ReviewCreateHub";

export const StyledReviewCreateHub = styled(ReviewCreateHub)`

border: solid 5px white;
width: 426px;

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

input{
    width: 300px;
    position: absolute;
}
`