import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Member from '../Member/Member';

const About = () => {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        fetch('./team.JSON')
            .then(res => res.json())
            .then(data => setMembers(data));
    }, []);
    return (
      <div className="bg-light pt-5 pb-4 overflow-hidden">
        <div className="text-center">
          <h1 className="fw-bold text-secondary">Meet Our Team</h1>
          <p className="text-muted">
            <i>
              Who really happy to work with us a long time like a professionals!
              <br /> The guys build a awesome comminuty since 2012!
            </i>
          </p>
        </div>
        <Row xs={1} md={4} className="g-4 py-4 px-2">
          {members.map((member) => (
            <Member key={member.id} member={member}></Member>
          ))}
        </Row>
      </div>
    );
};

export default About;