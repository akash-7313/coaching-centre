import React from "react";
import { Card, Col } from "react-bootstrap";

const Member = (props) => {
//   console.log(props.member);
    const style = {
      color: "#ffe6e6",
    };
  const { img, name, profession, experience } = props.member;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body className="bg-danger">
          <Card.Title>
            <b>{name}</b>
          </Card.Title>
          <Card.Text>
            <small>
              <i className="text-Success">{profession}</i>
            </small>
          </Card.Text>
          <Card.Text>
            <snall style={style}>{experience}</snall>{" "}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Member;
