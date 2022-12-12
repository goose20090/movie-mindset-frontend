import styled from "styled-components";
import List from "../components/List";

export const StyledUserList = styled(List)`
border: 5px solid white;
height: fit-content;

overflow-x: hidden;
margin: 10px;
li{
    list-style: none;
    margin-top: 5px
}

a{
    text-decoration: underline;
    color:white;
}
`