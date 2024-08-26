import React from 'react'
import Button from 'react-bootstrap/Button';

export const MoviePosterDetails = ({movieData}) => {

    const {casts} = movieData;
  return (
    <div className='container'>
        <h2 style={{marginBottom:"20px"}}>{movieData.name}</h2>
        <div className='language-container' style={{marginBottom:"20px"}}>
            <span className='langauge'>2D</span> 
            <span className='langauge'>{movieData.language}</span>
        </div>
        <h4 style={{marginBottom:"20px"}}>Released on {movieData.releaseDate}</h4>
        <p>{movieData.description}</p>
        <h6 style={{marginBottom:"20px"}}>Cast: {casts.map(cast=><span className='cast'>{cast}</span>)}</h6>
        <div>
            <Button variant="danger">Book tickets</Button>{' '}
        </div>
    </div>
  )
}
