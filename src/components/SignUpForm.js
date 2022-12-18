import React, { useState } from "react";

function SignUpForm({className}){

    const [display, setDisplay] = useState(false)

    function toggleForm(){
        setDisplay(!display)
    }
    return(
        <div className={className}>
            <button id ="open-button" onClick = {toggleForm} > Sign Up</button>
            <div id = "form-popup" style = {{'display': `${display? 'block': 'none'}`}}>
                <form id = "form-container">
                    <h1>Login</h1>
                    <label htmlFor= "user-name">Username</label>
                    <input id = 'text-input'type= "text" placeholder="Enter Username" name = "user-name" required/>
                    <button type = "submit" className= "btn"> Sign up!</button>
                    <button type = "button" className = "btn cancel" onClick = {toggleForm}>Close</button>
                </form>
            </div>
        </div>
    )
}

export default SignUpForm