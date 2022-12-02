import styled from "styled-components";
import User from "../components/user-page/User";

export const StyledUser = styled(User)`

border: 5px solid white;
height: fit-content;

img{
    width: 80px;
}

#name-and-avatar{
    border: 5px solid white;
    display: flex;
    justify-content: space-between;
}
`