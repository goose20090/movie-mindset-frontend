import React, {useState} from "react"

function StarRating({className, currentRating}){
    const [rating, setRating] = useState(currentRating);
    const [hover, setHover] = useState(0);
    return(
        <div className= {className}>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">⭐</span>
          </button>
        );
      })}
    </div>
    )
}

export default StarRating;
