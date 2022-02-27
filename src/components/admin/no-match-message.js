import React from "react";

import { Link } from "react-router-dom";

import { Container, Row, Col } from "reactstrap";

const NoMatchMessage = () => {
  return (
    <>
      <div className="no-match">
        <Container>
          <Row>
            <Col xl="6">
              <h6 className="muted">Ut enim ad minim veniam</h6>
              <h1>You Must Be Looking For Something Hard To Find</h1>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="button-group">
                <Link
                  to="/"
                  className="btn button-alt btn-flex"
                  aria-label="Return to react-axios-portfolio"
                >
                  Return to react-axios-portfolio
                </Link>
              </div>
            </Col>
            <Col xl="6">
              <img
                src="https://via.placeholder.com/2000x2000"
                alt="404"
                loading="lazy"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default NoMatchMessage;
