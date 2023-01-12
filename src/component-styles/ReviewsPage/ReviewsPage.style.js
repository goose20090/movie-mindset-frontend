import styled from "styled-components";
import ReviewsPage from "../../components/ReviewsPage/ReviewsPage"

export const StyledReviewsPage = styled(ReviewsPage)`

margin-top: 3%;
display: flex;
justify-content: space-evenly;

h2{
    margin-top: 5%;
}

#create-hub-link{
    text-decoration: underline;
    cursor: pointer;

    color: white;
position: relative;
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

}

#initial-page{
    border: solid 5px white;
    width: 426px;
    height: fit-content;
    
    h2{
        margin-left: 2.5%;
    }
}

`