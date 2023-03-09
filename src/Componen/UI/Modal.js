
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

import Modal from 'react-bootstrap/Modal';
import cartContext from '../../store/cart-context';
import CartItem from '../CartItem';
import './Modal.css';



const ModalCard = () => {


    const cartElements = [

        {
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        quantity: 2,
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        quantity: 3,
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        quantity: 1,
        
        }
        
        ]



    const [show, setShow] = useState(false);

    const crtCtx=useContext(cartContext);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const CartList=<ul>{crtCtx.item.map((e)=>(
        <CartItem title={e.title} price={e.price} img={e.img} qty={e.quantity} />
    ))}</ul>
  

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Card
      </Button>

      <Modal dialogClassName="my-modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton  >
          <Modal.Title>CART</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container>
    <Row>
      <Col>Items</Col>
      <Col>Quantity</Col>
      <Col>Price</Col>
    </Row>
    </Container>
         
     {CartList}



        </Modal.Body>
        <Modal.Footer  style={{display:'flex',alignItems:'center', justifyContent:'center'}}>
         
         
          <Button variant="primary" >
           Purchase
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCard