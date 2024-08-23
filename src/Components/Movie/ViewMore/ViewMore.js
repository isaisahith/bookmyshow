import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { Description } from '../Description/Description';
export const ViewMore = (props) => {
    const {movie, onRemove} = props;
    const [view, setView] = useState(false);

    const [text, setText] = useState('More');

    const handleViewMore = ()=>{
        setView(!view);

        if(!view){
            setText('Less')
        }else{
            setText('More')
        }
    }

    if(!view){
        return <div className='viewMore'><Button variant="primary"
        onClick={()=>handleViewMore()}
        >{text}</Button>{' '}
        <Button variant="danger" onClick={()=> onRemove(movie._id)}>Remove</Button>{' '}</div>
    }
  return (
    <div>
        <ListGroup className="list-group-flush">
        
        <ListGroup.Item>Directed by {movie.director}</ListGroup.Item>
        <ListGroup.Item>released on {movie.releaseDate}</ListGroup.Item>
      </ListGroup>
      <div className='viewMore'><Button variant="primary"
        onClick={()=>handleViewMore()}
        >{text}</Button>{' '}
        <Button variant="danger" onClick={()=> onRemove(movie._id)}>Remove</Button>{' '}</div>
    </div>
  )
}
