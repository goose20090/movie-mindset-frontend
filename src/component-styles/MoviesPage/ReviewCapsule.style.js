import styled from "styled-components";
import ReviewCapsule from "../../components/MoviePage/ReviewCapsule"

export const StyledReviewCapsule = styled(ReviewCapsule)`
border: 5px solid white;
height: fit-content;
min-height: 135px;
width: 280px;

#review-profile{
    border-bottom: 5px solid white;
    display: flex;
    justify-content: space-between;
}

#avatar{
    width: 60px;
    margin-right: 10px;
    border-radius: 50%;
}

`