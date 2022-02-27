import React from "react";

import { Container, Row, Col } from "reactstrap";

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
                  alt="react-axios-portfolio"
                  loading="lazy"
                  className="img-fluid"
                />
              </Zoom>
            </Col>
            <Col xl="6" className="text flxb">
              <h6 className="muted">Lorem ipsum dolor sit amet</h6>
              <h1>Ut enim ad minim veniam</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua{" "}
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Go to consectetur adipiscing"
                >
                  consectetur adipiscing
                </a>{" "}
                consectetur adipiscing elit.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua{" "}
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Go to consectetur adipiscing"
                >
                  consectetur adipiscing
                </a>{" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua{" "}
                <span className="underlined">tempor incididunt ut labore</span>{" "}
                through Next.js and React.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                <span className="underlined">et dolore magna</span> Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xl="12" className="flxb">
              <h6 className="alternate-heading">consectetur adipiscing</h6>
              <div className="button-group">
                <a
                  href="/"
                  className="btn button-text btn-flex"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Go to consectetur adipiscing"
                >
                  consectetur adipiscing
                </a>
                <a
                  href="/"
                  className="btn button-text btn-flex"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Go to consectetur adipiscing"
                >
                  consectetur adipiscing
                </a>
                <a
                  href="/"
                  className="btn button-text btn-flex"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Go to consectetur adipiscing"
                >
                  consectetur adipiscing
                </a>
                <a
                  href="/"
                  className="btn button-text btn-flex"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Go to consectetur adipiscing"
                >
                  consectetur adipiscing
                </a>
                <a
                  href="/"
                  className="btn button-text btn-flex"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Go to consectetur adipiscing"
                >
                  consectetur adipiscing
                </a>
                <a
                  href="/"
                  className="btn button-text btn-flex"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Go to consectetur adipiscing"
                >
                  consectetur adipiscing
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Header;
