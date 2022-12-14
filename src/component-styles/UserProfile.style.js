import styled from "styled-components";
import UserProfile from "../components/UserProfile";

export const StyledUserProfile = styled(UserProfile)`

height: 300px;
width: 426px;
height: fit-content;
border: solid white 5px;

#name-and-avatar{
    display: flex;
    justify-content: space-between;
    img{
        height: 60px;
        width: 60px;
    }
}

#review-count{
    border-bottom: solid white 5px;

}

`
