import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Price from "../Price/Price";

const Prices = () => {
  const [prices, setPrices] = useState([]);
  useEffect(() => {
    fetch("./pianoData.JSON")
      .then((res) => res.json())
      .then((data) => setPrices(data));
  }, []);
  return (
    <div className="my-5 container p-4">
      <h1 className="my-4 text-uppercase text-center">ALL Course price List</h1>
      <Row xs={1} md={3} className="g-4">
        {prices.map((price) => (
          <Price key={price.id} price={price}></Price>
        ))}
      </Row>
    </div>
  );
};

export default Prices;
