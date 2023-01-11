import styled from "styled-components";
import SignUpForm from "../components/SignUpForm";

export const StyledSignUpForm = styled(SignUpForm)`

display: inline-flex;
#open-button {
  background-color: #555;
  color: white;
  padding: 16px 20px;
  cursor: pointer;
  opacity: 0.8;
  margin-top: 100px;
  right: 400px;
  width: 280px;

  &:hover{
    opacity: 1; 
  }
}

label{
  color: white;
}

#form-popup {
  display: none;
  position: fixed;
  top: 10px;
  right: 15px;
  border: 3px solid #f1f1f1;
  z-index: 9;
}

#form-container {
  max-width: 300px;
  padding: 10px;
  background-color: black;
}


#text-input, #password-input{
  width: 90%;
  padding: 15px;
  margin: 5px 0 22px 0;
  border: none;
  background: #f1f1f1;
  &:focus{
    background-color: #ddd;
    outline: none;
  }
}


button{
  font-family: inherit;
  font-size: medium;
  margin-left: 14%;
  background-color: black;
  color: white;
  border: 0.2em solid;
  border-color: white;
  padding: 10px 16px;
  cursor: pointer;
  width: 75%;
  margin-bottom:10px;
  opacity: 0.8;
  &:hover{
    opacity: 1;
  }
}
.cancel {
  background-color: white;
  color: black;
}

`