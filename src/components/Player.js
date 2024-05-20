import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Player({el}) {
  return (
    <div>
       <Card style={{ width: '18rem', margin:"20px" }}>
      <Card.Img variant="top" src={el.img} style={{width:"250px", height:"300px"}}/>
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
   {el.team}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Player
