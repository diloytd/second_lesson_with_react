import { useState } from 'react'
import "../Rating/rating.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Rating() {
const stars = Array(5).fill(0);
const [currentStar, setCurrentStar] = useState()
const [hoverStar, setHoverStar] = useState()
  return (
     <>
        <div className="rating-area">
            {stars.map((item, i) => {
                let currentStyle = i <= currentStar ? {color : "gold"} : {color:"lightgrey"}
                const hoverStyle = i <= hoverStar ? {color: 'gold'} : {color:"lightgrey"}
                return (
                <div key={i}
                 onClick={() => setCurrentStar(i)}
                 onMouseMove={() =>setHoverStar(i)}
                 onMouseOut={() => setHoverStar(i)}
                 style={{...currentStyle,...hoverStyle}} >
                    <FontAwesomeIcon icon={faStar} size="2x"/>
                </div>)
            })}
        
        </div>
 </>
    )
  }
  
  export default Rating