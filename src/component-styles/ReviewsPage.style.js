import styled from "styled-components";
import ReviewsPage from "../components/ReviewsPage";

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