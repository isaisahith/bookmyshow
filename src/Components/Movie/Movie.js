import React from 'react'
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';
import './Movie.css'
import { Description } from './Description/Description';
import { ViewMore } from './ViewMore/ViewMore';
import { Rating } from '../Rating/Rating';
import { Link } from 'react-router-dom';
import { isUserLoggedIn } from '../../utils/helper';

export const Movie = (props) => {
    //const {name, description} = movie;

    const {movie, search, onRemove, user} = props;

    const isLoggedIn = isUserLoggedIn();

    

    const searchedValue = search;

    

    const rating =4;

    
    

  return (
    <div >
        
          <Card style={{ width: '18rem' }} className='movie'>
            <Link to={`/moviedetails/${movie._id}`} style={{textDecoration:"none"}}>
      <Card.Img className='cardImage' variant="top" src={movie.posterUrl} /> </Link>
      <Card.Body>
        <Card.Title className='title'><span style={{backgroundColor:'yellow'}}>{movie.name.slice(0,searchedValue.length)}</span><span>{movie.name.slice(searchedValue.length)}</span></Card.Title>
        <Description className='description' description={movie.description}/>
      </Card.Body>
        
      {isLoggedIn && <Card.Body>
        <Rating rating ={movie.rating}/>
        <ViewMore movie={movie} onRemove={onRemove}/>
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
        
      </Card.Body>}
    </Card>
        
    </div>
  )
}
