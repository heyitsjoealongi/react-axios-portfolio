import React from "react";

import { Container, Row, Col } from "reactstrap";

const Connect = () => {
  return (
    <>
      <section className="connect">
        <Container>
          <Row>
            <Col className="col-auto connect-contact">
              <ul>
                <li>
                  <a href="mailto:email@email.com" aria-label="Email">
                    <i className="ri-mail-send-line flxb"></i>
                    &nbsp;email@email.com
                  </a>
                </li>
                <li>
                  <a href="tel:+11111111111" aria-label="Call">
                    <i className="ri-smartphone-line flxb"></i>
                    &nbsp;+1-111-111-1111
                  </a>
                </li>
              </ul>
            </Col>
            <Col className="col-auto ml-auto connect-social">
              <ul>
                <li>
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="connect-icon"
                    aria-label="Twitter"
                  >
                    <i className="ri-twitter-line"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="connect-icon"
                    aria-label="GitHub"
                  >
                    <i className="ri-github-line"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="connect-icon flx"
                    aria-label="Medium"
                  >
                    <i className="ri-medium-line"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="connect-icon"
                    aria-label="Instagram"
                  >
                    <i className="ri-instagram-line"></i>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Connect;
