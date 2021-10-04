import React, { useEffect, useState } from "react";
import { Carousel, Row } from "react-bootstrap";
import heroImage1 from "../../images/graduate111.jpg";
import heroImage2 from "../../images/graduate222.jpg";
import heroImage3 from "../../images/graduate333.jpg";
import PopularCourses from "../PopularCourses/PopularCourses";

const Home = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    fetch("./popularCourses.JSON")
      .then((res) => res.json())
      .then((data) => setPopular(data));
  }, []);


  const heading = {
    color: "#80ff00",
  };
  const paragraph = {
    color: "#00ff80",
  };
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={heroImage1} alt="First slide" />
          <Carousel.Caption>
            <h3 style={heading}>
              Choose thr bright <br /> and right carrer for <br /> you.{" "}
            </h3>
            <p style={paragraph}>
              There was a time when I wasn’t sure if I’d even be around to see
              this day.I can’t speak for the whole population of this school,
              but I do know that many others have felt the same way.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={heroImage3} alt="Second slide" />

          <Carousel.Caption>
            <h3 style={heading}>
              We help you go furthur <br /> than you have ever <br /> dreamed.
            </h3>
            <p style={paragraph}>
              And so, while I could spend this time thanking the many staff who
              have helped me get where I am today (like Zach, Scott Russell,
              Glenn, Sara and Jade), I’m choosing to talk to my peers.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={heroImage2} alt="Third slide" />

          <Carousel.Caption>
            <h3 style={heading}>
              The education you <br /> want, the attention you <br /> deserve
            </h3>
            <p style={paragraph}>
              To everyone who is graduating- today is for you. You can look at
              yourself in the mirror later tonight and know that you beat the
              odds that may have been stacked against you;
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="mt-5">
        <div className="text-center">
          <h1 className="fw-bold">Popular Courses</h1>
          <p>
            <i>
              Replenish him third creature and meat blessed void a fruit
              gathered you’re, they’re two <br /> waters own morning gathered
              greater shall had behold had seed.
            </i>
          </p>
        </div>
        <Row xs={1} md={2} className="g-4 py-4 px-2">
          {popular.map((course) => (
            <PopularCourses key={course.id} course={course}></PopularCourses>
          ))}
        </Row>
      </div>
      <div className="d-flex justify-content-around align-items-center bg-light py-5 my-5">
        <div className="text-center text-secondary">
          <i className="fas fa-book fa-4x"></i>
          <h3>356</h3>
          <p>Courses</p>
        </div>
        <div className="text-center text-secondary">
          <i className="fas fa-users fa-4x"></i>
          <h3>4781</h3>
          <p>Students</p>
        </div>
        <div className="text-center text-secondary">
          <i className="fas fa-pencil-alt fa-4x"></i>
          <h3>41</h3>
          <p>Lections</p>
        </div>
        <div className="text-center text-secondary">
          <i className="far fa-calendar-alt fa-4x"></i>
          <h3>120</h3>
          <p>Events</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
