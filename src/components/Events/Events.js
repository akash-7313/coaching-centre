import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import EventDetails from "../EventDetails/EventDetails";

const Events = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
      fetch("./events.JSON")
        .then((res) => res.json())
        .then((data) => setEvents(data));
    }, []);

  return (
    <div className="pt-5 pb-4 bg-light">
      <div className="px-5 text-primary fw-bolder">
        <h2 className="border-bottom d-inline border-secondary border-3 pb-1">
          Upcoming events
        </h2>
      </div>
      <Row xs={1} md={1} className="g-4 py-4 px-3">
        {events.map((event) => (
          <EventDetails key={event.id} event={event}></EventDetails>
        ))}
      </Row>
    </div>
  );
};

export default Events;
