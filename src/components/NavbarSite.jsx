import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/img/anglay-logo-white.png";
import { FaUser } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";

import "./Navbar.css";
const NavbarSite = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-danger w-100">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <div className="d-flex flex-column w-100">
              <div className="border border-2 border-info w-auto  d-flex flex-wrap align-items-center justify-content-between">
                <div className="border border-2 border-info">
                  <img className="logo" src={logo} alt="" />
                </div>
                <div className="">
                  <Form className="d-flex gap-4">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="search"
                      aria-label="Search"
                    />
                    <Button variant="outline-success bg-light">Search</Button>
                  </Form>
                </div>
                <div className="">
                  <div className="gap-2 d-flex">
                    <div className="icon1 ">
                      <FaUser  />
                    </div>
                    <div className="icon2">
                    <IoMdCart  />
                    </div>
                    
                  </div>
                </div>
              </div>
              <div>
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "200px", height: "100px" }}
                  navbarScroll
                >
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown title="Link" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#" disabled>
                    Link
                  </Nav.Link>
                </Nav>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarSite;
