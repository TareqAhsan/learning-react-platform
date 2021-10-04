import React from "react";
import { Card, Col } from "react-bootstrap";

const Price = (props) => {
  const { price, name } = props.price;
  return (
    <div>
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>Total Cost for this course: {price}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Price;

