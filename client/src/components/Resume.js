import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/resume.css";

const Resume = () => {
  return (
    <Fragment>
      <div
        id="resume"
        className="resume__section d-flex align-items-center justify-content-center"
      >
        <Link to="./DanielRosenbergResume.jpeg" target="_blank" download>
          <Button variant="outline-primary" className="resume__button">
            Download Resume <i class="fa-solid fa-download"></i>
          </Button>
        </Link>
      </div>
    </Fragment>
  );
};

export default Resume;
