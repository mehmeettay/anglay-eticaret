import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/img/anglay-logo-white.png";
import { FaUser } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import "./Navbar.css";
import { IoMdNotificationsOutline } from "react-icons/io";

const NavbarSite = () => {
  const handleToggle = () => {
    setIsOpen(!isOpen); // isOpen durumunu tersine çevirir
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar className="navbar-main">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <div className="d-flex flex-column w-100 pt-1 ">
              <div className=" w-auto  d-flex flex-wrap align-items-center justify-content-between">
                <div className="cursor-pointer">
                  <img className="logo" src={logo} alt="" />
                </div>

                <div className="search-bar d-flex justify-content-between">
                  <input
                    type="text"
                    placeholder="Aramak istediğiniz kelimeyi giriniz..."
                  />
                  <IoSearch className="search-icon" />
                </div>

                <div className="">
                  <div className="d-flex gap-3 ">
                    <div className="icon1 ">
                      <IoMdNotificationsOutline className="notification" />
                    </div>
                    <div className="icon1 ">
                      <FaUser className="user" />
                    </div>
                    <div className="icon2">
                      <IoMdCart className="cart" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <Nav
                  className="me-auto mt-lg-3 "
                  style={{
                    maxHeight: "200px",
                    height: "auto",
                  }}
                  navbarScroll
                >
                  <div className="d-flex gap-4 ">
                    <div>
                      <NavDropdown
                        title="Tüm Kategoriler"
                        id="basic-nav-dropdown"
                        show={isOpen}
                        onMouseEnter={handleToggle}
                        onMouseLeave={handleToggle}
                        className={
                          isOpen ? "nav-dropdown active" : "nav-dropdown"
                        }
                      >
                        <NavDropdown.Item href="#action3">
                          Bilgisayar
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                          Telefon
                        </NavDropdown.Item>

                        <NavDropdown.Item href="#action5">TV</NavDropdown.Item>
                        <NavDropdown.Item href="#action5">
                          Beyaz Eşya
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action5">
                          Ev Aletleri
                        </NavDropdown.Item>
                      </NavDropdown>
                    </div>
                    <div>
                      <button
                        type="button"
                        class="btn btn-outline-light mh-25px"
                      >
                        En çok Satanlar
                      </button>
                    </div>
                    <div>
                      <button type="button" class="btn btn-outline-light">
                        Fırsat Ürünleri
                      </button>
                    </div>
                    <div>
                      <button type="button" class="btn btn-outline-light">
                        Kampanyalar
                      </button>
                    </div>
                  </div>
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
