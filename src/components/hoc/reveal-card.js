import React from "react";

import { Col, Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

import Slide from "react-reveal/Slide";

const RevealCard = (reactAxiosPortfolio) => {
  return (
    <>
      <Col xl="4" className="flxc">
        <Slide bottom>
          <article className="reveal-card flxcb">
            <Card>
              <CardImg
                src={reactAxiosPortfolio.image}
                alt={reactAxiosPortfolio.heading}
                className="img-fluid"
                loading="lazy"
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

export default RevealCard;
