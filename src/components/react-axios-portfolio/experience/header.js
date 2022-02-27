import React from "react";

import { Container, Row, Col } from "reactstrap";

import Technologies from "./technologies";

import Zoom from "react-reveal/Zoom";

const Header = () => {
  return (
    <>
      <section className="header-alt">
        <Container fluid={true}>
          <Row>
            <Col xl="6" className="image flxb">
              <Zoom bottom>
                <img
                  src="https://via.placeholder.com/2000x2000"
                  alt="Work Experience"
                  loading="lazy"
                  className="img-fluid"
                />
              </Zoom>
            </Col>
            <Col xl="6" className="text flxb">
              <h6 className="muted">Lorem ipsum</h6>
              <h1>Lorem ipsum</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                <span className="underlined">Lorem ipsum</span> Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Go to react-axios-portfolio"
                >
                  Lorem ipsum
                </a>{" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Go to react-axios-portfolio"
                >
                  Lorem ipsum
                </a>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                <span className="underlined">Lorem ipsum</span> Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xl="12" className="flxb">
              <h6 className="alternate-heading">Lorem ipsum</h6>
              <Technologies />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Header;
