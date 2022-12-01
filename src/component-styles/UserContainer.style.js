import styled from "styled-components";
import UserContainer from "../components/UsersContainer";

export const StyledUserContainer = styled(UserContainer)`
display: grid;
grid-gap: 1em;
grid-template-columns: 30% 1fr;
grid-template-rows: auto 1fr auto;

`