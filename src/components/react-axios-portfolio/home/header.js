import React from "react";

import { Link } from "react-router-dom";

import { Container, Row, Col, Jumbotron } from "reactstrap";

import Zoom from "react-reveal/Zoom";

const Header = () => {
  return (
    <>
      <section className="header-main">
        <Jumbotron>
          <Container fluid={true}>
            <Row>
              <Col xl="6" className="text flxb">
                <h6 className="muted">Lorem ipsum</h6>
                <h1>Lorem ipsum</h1>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                  <span className="underlined">adipiscing elit</span> Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="lead bold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                  <span className="underlined">adipiscing elit</span> Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="button-group">
                  <Link
                    to="/experience"
                    className="btn button btn-flex"
                    aria-label="Experience"
                  >
                    Experience
                  </Link>
                  <Link
                    to="/about"
                    className="btn button-alt btn-flex"
                    aria-label="About"
                  >
                    About
                  </Link>
                </div>
              </Col>
              <Col xl="6" className="image flxb">
                <Zoom bottom>
                  <img
                    src="https://via.placeholder.com/2000x2000"
                    alt="Lorem ipsum"
                    loading="lazy"
                    className="img-fluid"
                  />
                </Zoom>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </section>
    </>
  );
};

export default Header;
