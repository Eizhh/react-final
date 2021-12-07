import React from "react";
import {Card, Button} from 'react-bootstrap';
import {Link } from 'react-router-dom'

export const Item = ({id, name, price, img, description} ) => {

  return (
      
        <Card border="warning" style={{ width: '20rem' }} className="bg-dark text-white">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>Precio: ${price}</Card.Text>

          <Link to={`/detail/${id}`}>
              <Button variant="warning">Ver detalles</Button>
          </Link>
        </Card.Body>
      </Card>
    )
}