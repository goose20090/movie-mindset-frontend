import styled from "styled-components";
import StarRating from "../components/StarRating";

export const StyledStarRating = styled(StarRating)`

display: inline;
padding: 5%;

button {
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  text-shadow: black;
}
.on {
}
.off {
  color: transparent;
  text-shadow: black;
}
`