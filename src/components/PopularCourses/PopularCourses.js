import React from 'react';
import { Card, Col } from "react-bootstrap";

const PopularCourses = (props) => {
    // console.log(props.course);
    const { img, name, price} = props.course;
    return (
      <Col>
        <Card className="shadow-sm h-100">
          <Card.Img className="h-100" variant="top" src={img} />
          <Card.Body>
            <Card.Title>
              <b>{name}</b>
            </Card.Title>
            <Card.Text>
              <b>
                <small>Course fee: ${price}k</small>
              </b>
            </Card.Text>
          </Card.Body>
          <div className="d-flex justify-content-between align-items-center p-3">
            <h5>125 Students</h5>
            <button className="btn btn-secondary"> Enroll Now</button>
          </div>
        </Card>
      </Col>
    );
};

export default PopularCourses;