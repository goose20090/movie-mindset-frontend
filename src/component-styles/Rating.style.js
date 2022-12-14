import styled from "styled-components";
import Rating from "../components/Rating";

export const RvPgStyledRating = styled(Rating)`

width: 200px;
height: fit-content;
margin: 2px;

`

export const MovPgStyledRating = styled(Rating)`
width: 200px;
height: fit-content;
margin: 2px;

&:hover{
    cursor: pointer;
}
` 