import React from "react";

function CommentForm({comment, setComment, className, handleSubmit}){
    return(
        <form className={className} onSubmit={handleSubmit}>
                <label>Your Comment:</label>
                <input
                    type="text"
                    name="body"
                    autoComplete="off"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <input type="submit" value="Save" />
        </form>
    )
}

export default CommentForm