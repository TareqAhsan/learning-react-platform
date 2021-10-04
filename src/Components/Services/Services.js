import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [serviceDEtails, setServiceDEtails] = useState([]);
  useEffect(() => {
    fetch("./pianoData.JSON")
      .then((res) => res.json())
      .then((data) => setServiceDEtails(data));
  }, []);
  return (
    <div className="container my-5 p-3">
      <h1 className="my-4 text-uppercase text-center">Our Services</h1>
      <Row xs={1} md={3} className="g-4">
        {serviceDEtails.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </Row>
    </div>
  );
};

export default Services;
