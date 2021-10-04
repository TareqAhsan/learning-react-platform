import React from "react";
import { Col,Card } from "react-bootstrap";

const Pack = (props) => {
    const {name,services,img,price} = props.pack
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              services duration: {services}
            </Card.Text>
            <Card.Text>
               price: {price}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Pack;
