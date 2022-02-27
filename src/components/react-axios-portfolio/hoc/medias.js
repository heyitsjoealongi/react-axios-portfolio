import React from "react";

import { Col, Media } from "reactstrap";

import Slide from "react-reveal/Slide";

const Medias = (reactAxiosPortfolio) => {
  return (
    <>
      <Col xl="6">
        <Slide right>
          <article className="media">
            <Media middle>
              <Media
                object
                src={reactAxiosPortfolio.image}
                alt={reactAxiosPortfolio.heading}
                loading="lazy"
                className="img-fluid"
              />
            </Media>
            <Media body>
              <Media heading>{reactAxiosPortfolio.heading}</Media>
              <p>{reactAxiosPortfolio.paragraph}</p>
            </Media>
          </article>
        </Slide>
      </Col>
    </>
  );
};

export default Medias;
