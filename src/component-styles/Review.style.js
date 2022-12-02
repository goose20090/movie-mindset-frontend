import styled from "styled-components";
import Review from "../components/Review";

export const StyledReview = styled(Review)`
border: 5px solid white;
height: fit-content;
min-height: 135px;
width: 280px;

#review-profile{
    border: 5px solid white;
    display: flex;
    justify-content: space-between;
}

#avatar{
    width: 60px;
    margin-right: 10px;
    border-radius: 50%;
}

`