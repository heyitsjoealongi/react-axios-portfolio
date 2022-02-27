import React from "react";

import { Col, Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

import Slide from "react-reveal/Slide";

const Highlight = (reactAxiosPortfolio) => {
  return (
    <>
      <Col xl="3" className="flxc">
        <Slide left>
          <article className="highlight flxcb">
            <Card>
              <CardImg
                src={reactAxiosPortfolio.image}
                alt={reactAxiosPortfolio.heading}
                loading="lazy"
                className="img-fluid"
              />
              <CardBody>
                <CardTitle tag="h4">{reactAxiosPortfolio.heading}</CardTitle>
                <CardText>{reactAxiosPortfolio.paragraph}</CardText>
              </CardBody>
            </Card>
          </article>
        </Slide>
      </Col>
    </>
  );
};

export default Highlight;
