import React from "react";
import { Card, Col } from "react-bootstrap";

const Member = (props) => {
//   console.log(props.member);
  const { img, name, profession, experience } = props.member;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body className="bg-light">
          <Card.Title>
            <b className="text-success">{name}</b>
          </Card.Title>
          <Card.Text>
            <small>
              <i className="text-secondary">{profession}</i>
            </small>
          </Card.Text>
          <Card.Text>
            <small className="text-muted">{experience}</small>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Member;
