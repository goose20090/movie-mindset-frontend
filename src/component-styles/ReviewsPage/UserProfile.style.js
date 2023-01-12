import styled from "styled-components";
import UserProfile from "../../components/ReviewsPage/UserProfile";

export const StyledUserProfile = styled(UserProfile)`

height: 300px;
width: 426px;
height: fit-content;
border: solid white 5px;

#name-and-avatar{
    margin-left: 2.5%;
    display: flex;
    justify-content: space-between;
    img{
        height: 60px;
        width: 60px;
    }
}

#review-count{
    border-bottom: solid white 5px;
    p{
        margin-left: 5%;
    }

}


.user-profile-rating{
    margin-left: 2.5%;
}
`
