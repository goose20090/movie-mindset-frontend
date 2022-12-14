import React, {useState} from "react"

function StarRating({className, rating, setRating}){
    const [display, setDisplay] = useState(rating);
    const [hover, setHover] = useState(0);


    return(
        <div className= {className}>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || display) ? "on" : "off"}
            onClick={() => {
              setDisplay(index)
              setRating(index)
            }}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(display)}
          >
            <span className="star">⭐</span>
          </button>
        );
      })}
    </div>
    )
}

export default StarRating;
