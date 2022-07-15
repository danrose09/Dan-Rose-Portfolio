import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import "../css/hero.css";

const Hero = () => {
  return (
    <Fragment>
      <div id="home">
        <div className="hero__overlay">
          <div className="hero bg-image">
            <div className="hero__title">
              <h1 className="hero__text">Hello, I'm Daniel.</h1>
              <h2 className="hero__subtext">
                - an <h2 className="aspiring">aspiring </h2> full-stack
                developer
              </h2>
            </div>
            <a href="#projects">
              <Button className="hero__button" variant="outline-light">
                My Projects
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;
