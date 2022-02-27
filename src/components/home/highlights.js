import React from "react";

import { Container, Row, Col } from "reactstrap";

import Highlight from "../hoc/highlight";

class Highlights extends React.Component {
  constructor(reactAxiosPortfolio) {
    super(reactAxiosPortfolio);
    this.state = {
      highlights: [
        {
          id: "0",
          image: "https://via.placeholder.com/2000x2000",
          heading: "sit amet",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: "1",
          image: "https://via.placeholder.com/2000x2000",
          heading: "sit amet",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: "2",
          image: "https://via.placeholder.com/2000x2000",
          heading: "sit amet",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: "3",
          image: "https://via.placeholder.com/2000x2000",
          heading: "sit amet",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
    };
  }

  render() {
    const { highlights } = this.state;

    return (
      <>
        <section className="highlights">
          <Container>
            <Row>
              <Col xl="12">
                <article className="heading">
                  <h6 className="muted">tempor incididunt</h6>
                  <h2>Lorem ipsum dolor sit amet</h2>
                </article>
              </Col>
            </Row>
            <Row>
              {highlights.map((reactAxiosPortfolio) => (
                <Highlight
                  key={reactAxiosPortfolio.id}
                  image={reactAxiosPortfolio.image}
                  heading={reactAxiosPortfolio.heading}
                  paragraph={reactAxiosPortfolio.paragraph}
                />
              ))}
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Highlights;
