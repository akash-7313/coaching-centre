import React from "react";
import { Card, Col } from "react-bootstrap";

const CourseDetails = (props) => {
  const { img, name, price, description, lecture, hour } = props.course;
  const height = {
    height: "600px",
  };

  return (
    <Col>
      <Card style={height} className="shadow-sm">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>
            <b className="text-success">{name}</b>
          </Card.Title>
          <Card.Text>
            <snall className="text-muted">{description}</snall>
          </Card.Text>
        </Card.Body>
        <div className="d-flex justify-content-between align-items-center text-muted px-3 mb-2">
          <h5>Lecture: {lecture}</h5>
          <h5>Hours: {hour}</h5>
        </div>
        <div className="d-flex justify-content-between align-items-center text-muted px-3 mb-2">
          <b className="text-secondary">
            <small>Course fee: ${price}k</small>
          </b>
          <button className="btn btn-warning btn-sm">
            <i class="fas fa-shopping-cart"></i> Add to Wishlist
          </button>
        </div>
      </Card>
    </Col>
  );
};

export default CourseDetails;
