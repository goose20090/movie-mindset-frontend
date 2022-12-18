import styled from "styled-components";
import SignUpForm from "../components/SignUpForm";

export const StyledSignUpForm = styled(SignUpForm)`
#open-button {
  background-color: #555;
  color: white;
  padding: 16px 20px;
  border: none;
  cursor: pointer;
  opacity: 0.8;
  position: fixed;
  top: 23px;
  right: 28px;
  width: 280px;

  &:hover{
    opacity: 1; 
  }
}

label{
  color: black;
}

#form-popup {
  display: none;
  position: fixed;
  top: 23px;
  right: 15px;
  border: 3px solid #f1f1f1;
  z-index: 9;
}

#form-container {
  max-width: 300px;
  padding: 10px;
  background-color: white;
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


.btn {
  background-color: #04AA6D;
  color: white;
  padding: 16px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  margin-bottom:10px;
  opacity: 0.8;
}
.cancel {
  background-color: red;
}

`