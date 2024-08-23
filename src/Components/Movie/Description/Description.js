import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';

export const Description = ({description}) => {

    const length = description.length
    const first50 = description.slice(0,50);

    const [show, setShow] = useState(false);

    const [toggle, setToggle] = useState('read more')
    const [text, setText] = useState(first50);

    if(length<=50){
        return <Card.Text>
          {description}
        </Card.Text>
        
    }

    

    


    const handleToggle =()=>{
        setShow(!show);

        if(show){
            setToggle('read less')
            setText(description);

        }else{
            setToggle('read more');
            setText(first50)
        }
    }


  return (

    
    <div>{text} <span style={{color:'blue', cursor:'pointer'}} onClick={()=>handleToggle()}>
            {toggle}
        </span></div>
  )
}
