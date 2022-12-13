import React, { useState } from "react";
import { StyledStarRating } from "../component-styles/StarRating.style";


function EditReview({reviewContent}){

    const [content, setContent] = useState(reviewContent)

    return(
        <>
            <h4>Rating: </h4><StyledStarRating currentRating={reviewContent.rating}/>
            <br/>
            <br/>
            <h4>Comment: </h4>
            <form>
                <input
                type = "text"
                name = "body"
                autoComplete="off"
                value = {content.comment}
                onChange = {(e)=>setContent({
                    ...reviewContent,
                    comment: e.target.value
                })}
                />
                <input
                type="submit"
                value = "save"
                />

            </form>
        </>
    )
}

export default EditReview;