import React from "react";
import { Row, Col } from "react-bootstrap";
import "../css/footer.css";

const Footer = () => {
  return (
    <div className="footer__section">
      <Row>
        <Col>
          <a href="https://www.linkedin.com/in/daniel-rosenberg-48248b240/">
            <i class="fa-brands fa-linkedin-in fa-1x social__icons"></i>
          </a>

          <a href="https://github.com/danrose09/">
            <i class="fa-brands fa-github fa-1x social__icons"></i>
          </a>

          <a href="https://www.instagram.com/danielp.rosenberg/">
            <i class="fa-brands fa-instagram fa-1x social__icons"></i>
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
          <p style={{ color: "#e94560" }}>www.danrose.com</p>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
