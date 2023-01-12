import React from "react";
import Select from 'react-select'
import { StyledSimpleButton } from "../../component-styles/Misc/SimpleButton.style";

function LoginSelect({className, users, handleLogin}){

    // use Reference value to control select's focus
    const selecRef = React.useRef();


    // Trigger select open on button via focus
    function handleClick(){
        if(selecRef.current){
            selecRef.current.focus()
        }
    }

    const customStyles = {
        
        option: (provided, state) => ({
          ...provided,
          borderBottom: '1px dotted white',
          color: 'white',
          backgroundColor: 'black',
          padding: 10,
          fontSize: '14px',
          "&:hover": {
            backgroundColor: "white",
            color: "black",
          }
        }),
        placeholder: (provided) => ({
            ...provided,
            display: 'none'
          }),
        control: (base, state, provided) => {
            if (!state.isFocused) {
                return{
                    ...provided,
                    opacity: 0
                }
            }
  
            return {
              ...base,
              width: 200,
              opacity: 0
            }
          },
      }
   
    // Add userNames to select options
    let options = []
    users.forEach(user => {
        options.push({value: [user.name], label: [user.name]})
    })


    return(
        <div className={className}>
            <StyledSimpleButton buttonLabel={"LOGIN"} handleClick ={handleClick} />
            <Select id = "select"openMenuOnFocus= {true} ref = {selecRef} onChange = {handleLogin} styles={customStyles} options = {options}/>
        </div>
    )
}

export default LoginSelect