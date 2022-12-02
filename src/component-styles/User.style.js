import styled from "styled-components";
import User from "../components/User";

export const StyledUser = styled(User)`

border: 5px solid white;
width: 491px;

img{
    width: 80px;
}

#name-and-avatar{
    border: 5px solid white;
    display: flex;
    justify-content: space-between;
}
`