import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import CourseDetails from "../CourseDetails/CourseDetails";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./courses.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="bg-light pt-5 pb-4">
      <div className="text-center">
        <h1 className="fw-bold text-primary border-bottom d-inline border-success border-3 pb-1">
          Choose a topic
        </h1>
        <p className="text-muted mt-3">
          <i>
            Replenish him third creature and meat blessed void a fruit gathered
            you’re, they’re two <br /> waters own morning gathered greater shall
            had behold had seed.
          </i>
        </p>
      </div>
      <Row xs={1} md={3} className="g-4 py-4 px-3">
        {courses.map((course) => (
          <CourseDetails key={course.id} course={course}></CourseDetails>
        ))}
      </Row>
    </div>
  );
};

export default Courses;
