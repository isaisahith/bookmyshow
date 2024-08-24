import React from 'react'
import './Rating.css'

export const Rating = (props) => {
    const {rating } = props;

    const stars = [];

    for(let i=0; i<rating; i++){
        stars.push(i);
    }

    const stars2 =[];

    for(let i=rating; i<5; i++){
        stars2.push(i);
    }
  return (
    <div>
        <div className='star-container'>

            {stars.map(star=><div className='star' style={{color:"#e4bd0e"}}>&#9733;</div>)}
            {stars2.map(star=><div className='star'>&#9734;</div>)}
            
        </div>
    </div>
  )
}
