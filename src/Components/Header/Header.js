import React from "react";
import { ButtonGroup, Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import img from "../../images/louis-smith-jl2LgYyDCNo-unsplash.jpg";
import "./Header.css";
const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "red",
  };
  return (
    <div className="custom">
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink style={activeStyle} to="/home">
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <NavLink style={activeStyle} to="/aboutus">
                AboutUs
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <NavLink style={activeStyle} to="/services">
                services
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink style={activeStyle} to="/prices">
                Prices
              </NavLink>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <img className="img-fluid" src={img} alt="" />
      <div className="centered">
        <h1 className="display-1">Piano school A Platform for Learning Piano</h1>
        <Button className="my-5">Learn more</Button>
      </div>
    </div>
  );
};

export default Header;
