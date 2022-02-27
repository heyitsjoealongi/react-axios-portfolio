import React from "react";

import { Row, Col } from "reactstrap";

import VideoModal from "../fc/video-modal";

const Solution = (reactAxiosPortfolio) => (
  <>
    <article className="solution-video">
      <Row>
        <Col xl="6" className="image flxb">
          <img
            src={reactAxiosPortfolio.image}
            alt={reactAxiosPortfolio.heading}
            loading="lazy"
            className="img-fluid"
          />
          <VideoModal className="video-modal" />
        </Col>
        <Col xl="6" className="text flxb">
          <h5 className="muted">{reactAxiosPortfolio.preheading}</h5>
          <h2>{reactAxiosPortfolio.heading}</h2>
          <p>{reactAxiosPortfolio.paragraph}</p>
        </Col>
      </Row>
    </article>
  </>
);

export default Solution;
