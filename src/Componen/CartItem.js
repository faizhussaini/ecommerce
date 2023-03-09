import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Card from 'react-bootstrap/Card';
import './Modal.css';

const CartItem = (props) => {
  return (
    <Container className='container' >
    
    <Row  className='container'>
      <Col>
      <Row>
        <Col>{props.title}</Col>
        <Col>
        {/* <div  style={{width:'30',height:'30'}}> */}

        <Card.Img  className='col-img' variant="top" src={props.img} />
        {/* </div> */}
        


        </Col>
      </Row>
      </Col>
      <Col>1

      </Col>
      <Col>{props.price}</Col>
      <Col>
      <Button variant="primary" type="submit">
        REMOVE
      </Button>
      </Col>
    </Row>
  </Container>
  )
}

export default CartItem