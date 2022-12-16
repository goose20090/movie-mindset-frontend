import styled from "styled-components";
import ReviewRUDHub from "../components/ReviewRUDHub";

export const StyledReviewRUDHub = styled(ReviewRUDHub)`

border: solid 5px white;
width: 426px;

#movie-info{
    border-bottom: solid 5px white;
}

#options{
    margin-top: 70%;
    margin-left: 33%;
    button{
        display: block;
        margin: 10px;
        width: 30%;
    }
}

#close-button{
    float: right;
    margin-top: -25%;
    margin-right: 5px;
    cursor: pointer;
}


`