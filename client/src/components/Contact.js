import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import "../css/contact.css";

const Contact = () => {
  const [IsMessageSent, setIsMessageSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hajs1s8",
        "template_rw35z9e",
        form.current,
        "l2gqvHQ0oOyIqG8LX"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsMessageSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact__section" id="contact">
      <h1 className="contact__title">Contact</h1>
      <i
        class="fa-solid fa-envelope fa-2x"
        style={{ marginBottom: "50px", color: "#E94560" }}
      ></i>
      <Container
        fluid
        className="mx-auto contact__container"
        style={{ width: "361px" }}
      >
        <form ref={form} onSubmit={sendEmail}>
          <Row className="contact__row">
            <Col>
              <input
                placeholder="Name"
                className="contact__input"
                type="text"
                name="user_name"
              />
            </Col>
          </Row>
          <Row className="contact__row">
            <Col>
              <input
                placeholder="Email"
                className="contact__input"
                type="email"
                name="user_email"
              />
            </Col>
          </Row>
          <Row className="contact__row">
            <Col>
              <textarea
                placeholder="Message"
                className="contact__input"
                name="message"
                style={{ height: "30vh" }}
              />
            </Col>
          </Row>
          <Row className="contact__row">
            <Col>
              <input
                className="contact__submit btn btn-primary"
                type="submit"
                value="Send"
              />
            </Col>
          </Row>
        </form>
        <Row>
          <Col>{IsMessageSent ? <p>Thank you for your message.</p> : null}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
