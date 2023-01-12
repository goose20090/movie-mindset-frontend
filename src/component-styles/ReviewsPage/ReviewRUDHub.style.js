import styled from "styled-components";
import ReviewRUDHub from "../../components/ReviewsPage/ReviewRUDHub"

export const StyledReviewRUDHub = styled(ReviewRUDHub)`

border: solid 5px white;
width: 426px;
height: fit-content;

#movie-info{
    border-bottom: solid 5px white;

    h2{
        margin-left: 2%;
    }
}

#options{
    display: flex;
    justify-content: space-around;
    button{
        margin: 10px;
        width: 30%;
    }
    margin-bottom: 5%;
}

#close-button{
    float: right;
    margin-top: -15%;
    margin-right: 5px;
    cursor: pointer;
}

#review-content{
    margin-left: 5%;
}


`