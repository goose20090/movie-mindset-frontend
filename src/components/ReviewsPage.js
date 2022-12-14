import React from "react";
import { StyledUserProfile } from "../component-styles/UserProfile.style";

function ReviewsPage({currentUser}){
    return (
        <div>
            <StyledUserProfile currentUser = {currentUser}/>
        </div>
    )
}

export default ReviewsPage
