import styled from "styled-components";
import User from "../components/User";

export const StyledUser = styled(User)`

border: 5px solid white;
width: fit-content;

img{
    width: 80px;
    float: right;
}

#name-and-avatar{
    border: 5px solid white;
    display: flex;
}
`