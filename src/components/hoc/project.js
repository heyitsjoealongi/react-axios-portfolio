import React from "react";
import { Card, CardText, CardBody, CardTitle, Button } from "reactstrap";

import Slide from "react-reveal/Slide";

const Project = (reactAxiosPortfolio) => {
  return (
    <>
      <Slide bottom>
        <article className="project">
          <Card>
            <div className="card-image">
              <img
                src={reactAxiosPortfolio.image}
                alt={reactAxiosPortfolio.heading}
                loading="lazy"
                className="img-fluid"
              />
            </div>
            <CardBody>
              <CardTitle>
                <h5>{reactAxiosPortfolio.subheading}</h5>
                <h4>{reactAxiosPortfolio.heading}</h4>
              </CardTitle>
              <CardText>{reactAxiosPortfolio.paragraph}</CardText>
              <Button
                href={reactAxiosPortfolio.link}
                target="_blank"
                rel="noopener noreferrer"
                className="button-cta btn-block border-gradient"
                aria-label="Lorem ipsum"
              >
                Lorem ipsum
              </Button>
            </CardBody>
          </Card>
        </article>
      </Slide>
    </>
  );
};

export default Project;
