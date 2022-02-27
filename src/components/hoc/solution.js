import React from "react";

import { Row, Col } from "reactstrap";

const Solution = (reactAxiosPortfolio) => (
  <>
    <article className="solution">
      <Row>
        <Col xl="6" className="text flxb">
          <h5 className="muted">{reactAxiosPortfolio.preheading}</h5>
          <h2>{reactAxiosPortfolio.heading}</h2>
          <p>{reactAxiosPortfolio.paragraph}</p>
        </Col>
        <Col xl="6" className="image flxb">
          <img
            src={reactAxiosPortfolio.image}
            alt={reactAxiosPortfolio.heading}
            loading="lazy"
            className="img-fluid"
          />
        </Col>
      </Row>
    </article>
  </>
);

export default Solution;
