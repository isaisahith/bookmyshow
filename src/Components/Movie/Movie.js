import React from 'react'
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';
import './Movie.css'
import { Description } from './Description/Description';
import { ViewMore } from './ViewMore/ViewMore';

export const Movie = (props) => {
    //const {name, description} = movie;

    const {movie, search, onRemove} = props;

    console.log(props)

    const searchedValue = search;

    


    

  return (
    <div >
        <Card style={{ width: '18rem' }} className='movie'>
      <Card.Img className='cardImage' variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title className='title'><span style={{backgroundColor:'yellow'}}>{movie.name.slice(0,searchedValue.length)}</span><span>{movie.name.slice(searchedValue.length)}</span></Card.Title>
        <Description className='description' description={movie.description}/>
      </Card.Body>
        
      <Card.Body>
        <ViewMore movie={movie} onRemove={onRemove}/>
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
        
      </Card.Body>
    </Card>
    </div>
  )
}
