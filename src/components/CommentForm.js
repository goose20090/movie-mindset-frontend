import React from "react";
import { StyledSimpleButton } from "../component-styles/SimpleButton.style";

function CommentForm({comment, setComment, className, handleSubmit, handleClose}){
    return(
        <div className={className}>
            <form  onSubmit={handleSubmit}>
                    <label>Your Comment:</label>
                    <input
                        type="text"
                        name="body"
                        autoComplete="off"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <div id = "options">
                        <StyledSimpleButton handleClick={handleSubmit} buttonLabel={"Save"} />
                        <StyledSimpleButton handleClick={handleClose} buttonLabel={"Cancel"}/>
                    </div>
            </form>
        </div>
    )
}

export default CommentForm