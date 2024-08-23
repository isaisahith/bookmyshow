import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Movie.css'
import { Description } from './Description/Description';

export const Movie = (props) => {
    //const {name, description} = movie;

    const {movie, search} = props;

    console.log(props)

    const searchedValue = search;

    


    

  return (
    <div >
        <Card style={{ width: '18rem' }} className='movie'>
      <Card.Img className='cardImage' variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title><span style={{backgroundColor:'yellow'}}>{searchedValue}</span><span>{movie.name.slice(searchedValue.length)}</span></Card.Title>
        <Description description={movie.description}/>
      </Card.Body>
      <ListGroup className="list-group-flush">
        
        <ListGroup.Item>Directed by {movie.director}</ListGroup.Item>
        <ListGroup.Item>released on {movie.releaseDate}</ListGroup.Item>
      </ListGroup>
      {/* <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body> */}
    </Card>
    </div>
  )
}
