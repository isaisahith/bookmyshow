import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Movie.css'
import { Description } from './Description/Description';

export const Movie = ({movie}) => {
    const {name, description} = movie;
  return (
    <div className='movie'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.name}</Card.Title>
        <Description description={description}/>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Language: {movie.language}</ListGroup.Item>
        <ListGroup.Item>Directed by {movie.director}</ListGroup.Item>
        <ListGroup.Item>released on {movie.releaseDate}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </div>
  )
}
