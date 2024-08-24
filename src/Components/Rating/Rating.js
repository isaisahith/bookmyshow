import React from 'react'
import './Rating.css'

export const Rating = (props) => {
    const {rating } = props;

    const stars = [];


    let fraction = rating - Math.floor(rating)

    for(let i=0; i<Math.floor(rating); i++){
        stars.push(i);
    }

    const stars2 =[];

    if(fraction!=0){
        for(let i=rating+1; i<5; i++){
        stars2.push(i);
    }
    }else{
        for(let i=rating; i<5; i++){
        stars2.push(i);
    }
    }

    fraction = 0.3

    
  return (
    <div>
        <div className='star-container'>

            {stars.map(star=><div className='star' style={{color:"#e4bd0e"}}>&#9733;</div>)}
            
            {stars2.map(star=><div className='star'>&#9734;</div>)}

            
            
        </div>
    </div>
  )
}


