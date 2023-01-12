import React, { useState } from "react";
import { StyledSimpleButton } from "../../component-styles/Misc/SimpleButton.style";

function SignUpForm({className, handleSignUpSubmit}){

    const [display, setDisplay] = useState(false)
    const [formData, setFormData] = useState('')

    function toggleForm(){
        setDisplay(!display)
    }

    function onSubmit(e){
        e.preventDefault()
        toggleForm()
        handleSignUpSubmit(formData)
    }
    return(
        <div className={className}>
            <StyledSimpleButton id ="open-button" handleClick= {toggleForm} buttonLabel = "SIGN UP"/>
            <div id = "form-popup" style = {{'display': `${display? 'block': 'none'}`}}>
                <form id = "form-container" onSubmit={onSubmit}>
                    <label htmlFor= "user-name">Username</label>
                    <input id = 'text-input'type= "text" placeholder="Enter your new username..." name = "user-name" value = {formData} onChange ={(e)=>{setFormData(e.target.value)}} required />
                    <button type = "submit" className= "btn"> SIGN UP</button>
                    <button type = "button" className = "btn cancel" onClick = {toggleForm}>CLOSE</button>
                </form>
            </div>
        </div>
    )
}

export default SignUpForm