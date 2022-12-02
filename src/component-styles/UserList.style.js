import styled from "styled-components";
import List from "../components/List";

export const StyledUserList = styled(List)`

border: 5px solid white;
height: fit-content;
width: fit-content;
li{
    list-style: none;
    margin-left: -25px;
    margin-top: 5px
}

a{
    text-decoration: underline;
    color:white;
}
`