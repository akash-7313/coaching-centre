import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const EventDetails = (props) => {
  const { img, date, name, description, interested, duration, address } =
    props.event;
  return (
    <Col>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Card>
                <Card.Img variant="top" src={img}></Card.Img>
              </Card>
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
              <snall className=" border-bottom border-primary">
                Date: {date}
              </snall>
            </Col>
          </Row>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                <b className="text-success">{name}</b>
              </Card.Title>
              <Card.Text>
                <snall className="text-muted">{description}</snall>
              </Card.Text>
            </Card.Body>
            <div className="d-flex justify-content-between px-3 my-2">
              <b>
                <i className="fas fa-clock me-2 text-secondary"></i>
                <small>{duration}</small>
              </b>
              <b>
                <i className="fas fa-users me-2 text-secondary"></i>
                <small>{interested}</small>
              </b>
              <b>
                <i className="fas fa-map-marker-alt me-2 text-secondary"></i>
                <small>{address}</small>
              </b>
            </div>
            <button className="btn btn-secondary w-25 ms-3 mt-4 mb-2">
              Learn More
            </button>
          </Card>
        </Col>
      </Row>
    </Col>
  );
};

export default EventDetails;

/*
<Card className="shadow-sm">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>
              <b>{name}</b>
            </Card.Title>
            <Card.Text>
              <snall>{description}</snall>{" "}
            </Card.Text>
          </Card.Body>
          <div className="d-flex justify-content-between align-items-center px-3"></div>
        </Card>
*/
