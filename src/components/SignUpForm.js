import React, { useState } from "react";

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
            <button id ="open-button" onClick = {toggleForm} > Sign Up</button>
            <div id = "form-popup" style = {{'display': `${display? 'block': 'none'}`}}>
                <form id = "form-container" onSubmit={onSubmit}>
                    <h1>Login</h1>
                    <label htmlFor= "user-name">Username</label>
                    <input id = 'text-input'type= "text" placeholder="Enter Username" name = "user-name" value = {formData} onChange ={(e)=>{setFormData(e.target.value)}} required />
                    <button type = "submit" className= "btn"> Sign up</button>
                    <button type = "button" className = "btn cancel" onClick = {toggleForm}>Close</button>
                </form>
            </div>
        </div>
    )
}

export default SignUpForm