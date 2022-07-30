
import { useState,useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import GetItemDetail from '../ItemDetailContainer/ItemDetailContainer';


 
  const Item= ({id,name,price,category,img,stock,description})=>{
   


  return (
    <Card style={{ width: '18rem',margin:'3rem' }}>
    <Card.Img variant="top" src={img} />
    <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>${price}</Card.Text>
    </Card.Body>
    </Card> 
  );
}

export default Item

