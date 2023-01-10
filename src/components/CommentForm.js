import React from "react";
import { StyledSimpleButton } from "../component-styles/SimpleButton.style";

function CommentForm({comment, setComment, className, handleSubmit}){
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
                    <StyledSimpleButton handleClick={handleSubmit} buttonLabel={"Save"} />
            </form>
        </div>
    )
}

export default CommentForm