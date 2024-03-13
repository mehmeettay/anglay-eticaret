import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import macbook from "../assets/img/macbook.webp"
const BilgisayarCard = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={macbook} />
      <Card.Body>
        <Card.Title>APPLE MacBook Pro 16 inc M3</Card.Title>
        <Card.Text>
          Some quick example text to build on the...
        </Card.Text>
        <p className='border border-1 border-danger text-end'>1200$</p>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
);
  
}

export default BilgisayarCard