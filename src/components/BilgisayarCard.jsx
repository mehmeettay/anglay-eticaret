import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import macbook from "../assets/img/macbook.webp";
import { FaHeart } from "react-icons/fa";
import { GoGitCompare } from "react-icons/go";
const BilgisayarCard = () => {
  return (
    <Card style={{ width: "15rem" }} className="card">
      <Card.Img className="img" variant="top" src={macbook} />
      <div className="quick-view-container">
        <button className="btn btn-success w-auto">Quick View</button>
      </div>

      <Card.Body>
        <Card.Title>APPLE MacBook Pro 16 inc M3</Card.Title>
        <Card.Text>Some quick example text to build on the...</Card.Text>
        <p className="border border-1 border-danger text-center text-success">
          {" "}
          <span className="text-danger me-3">
            <del>1400$</del>{" "}
          </span>{" "}
          1200$
        </p>
        <div
          className="border border-1 border-success d-flex justify-content-center"
          role="button"
        >
          <button className="border-0 bg-transparent text-success">
            Ad to Cart
          </button>
        </div>
        <div
          className="border border-1 border-success d-flex flex-row align-items-center justify-content-center mt-2  "
          role="button"
        >
          <div className="me-2">
            <FaHeart className="me-2" /> wishlist |
          </div>

          <div>
            <GoGitCompare className="me-2" />
            compare
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BilgisayarCard;
