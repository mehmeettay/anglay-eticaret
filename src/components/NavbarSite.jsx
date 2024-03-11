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
import { FaSearch } from "react-icons/fa";

import "./Navbar.css";
import { FormControl } from "react-bootstrap";
const NavbarSite = () => {
  return (
    <>
      <Navbar expand="lg" className="navbar-main">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <div className="d-flex flex-column w-100">
              <div className=" w-auto  d-flex flex-wrap align-items-center justify-content-between">
                <div className="">
                  <img className="logo" src={logo} alt="" />
                </div>
                <div className="">
                  <Form className="d-flex gap-3">
                 
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
                  <div className="d-flex gap-3 ">
                    <div className="icon1 ">
                      <FaUser  />
                    </div>
                    <div className="icon2">
                    <IoMdCart className="cart" />
                    </div>
                    
                  </div>
                </div>
              </div>
              <div >
                <Nav
                  className="me-auto my-2 my-lg-0 "
                  style={{ maxHeight: "200px", height: "100px" }}
                  navbarScroll
                >
                  
                  <NavDropdown title="Tüm Kategoriler" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action1">En çok Satanlar</Nav.Link>
                  <Nav.Link href="#action2">Fırsat Ürünleri</Nav.Link>
                 
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
