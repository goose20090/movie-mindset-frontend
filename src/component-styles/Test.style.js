import styled from "styled-components";
import Test from '../components/Test';

export const StyledTest = styled(Test)`
height: 200px;
width: 200px;
background-color: ${(props)=> props.backgroundColor};

&:hover{
    & h1 {
        color: blue;
    }
    background-color: white;
}

`

export const TestText = styled.h1`
font-size: 25px;
color: white
`