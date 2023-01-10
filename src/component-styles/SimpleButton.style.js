import styled from "styled-components";
import SimpleButton from "../components/SimpleButton";

export const StyledSimpleButton = styled(SimpleButton)`

font-family: inherit;
background-color: black;
margin-top: 10px;
padding-left: 1em;
padding-right: 1em;
color: white;
border: 0.2em solid;
opacity: 0.8;
font-size: medium;

&:hover{
    opacity: 1;
}

&:active{
    background-color: white;
    color: black;
}
`