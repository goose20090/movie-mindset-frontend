import styled from "styled-components";
import User from "../components/User";

export const StyledUser = styled(User)`

height: 300px;
width: 426px;
height: fit-content;
margin: 10px;
border: solid white 5px;

img{
    height: 60px;
    width: 60px;
}

#ratings-container{
    overflow: scroll;
    overflow-x: hidden;
    height: 300px;
}

#name-and-avatar{
    display: flex;
    justify-content: space-between;
    border-bottom: solid white 5px;
}

`