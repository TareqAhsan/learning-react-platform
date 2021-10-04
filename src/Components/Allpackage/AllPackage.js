import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Pack from "../pack/Pack";

const AllPackage = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("./pianoData.JSON")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  return (
    <div className="container my-5">
      <h1 className="my-4 text-uppercase text-center">
        Our Packages for Piano school
      </h1>
      <Row xs={1} md={2} className="g-4">
        {packages.slice(0, 4).map((pack) => (
          <Pack key={pack.id} pack={pack}></Pack>
        ))}
      </Row>
    </div>
  );
};

export default AllPackage;
