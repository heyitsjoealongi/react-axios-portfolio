import React from "react";
import { Col, Media } from "reactstrap";

import Slide from "react-reveal/Slide";

const MediasWide = (reactAxiosPortfolio) => {
  return (
    <>
      <a
        href={reactAxiosPortfolio.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Col xl="12">
          <Slide bottom>
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
                <h5>{reactAxiosPortfolio.subheading}</h5>
                <Media heading>{reactAxiosPortfolio.heading}</Media>
                <p>{reactAxiosPortfolio.paragraph}</p>
              </Media>
            </article>
          </Slide>
        </Col>
      </a>
    </>
  );
};

export default MediasWide;
