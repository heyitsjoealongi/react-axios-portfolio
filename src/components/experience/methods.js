import React from "react";

import { Container, Row } from "reactstrap";

import RevealCard from "../hoc/reveal-card";

class Methods extends React.Component {
  constructor(reactAxiosPortfolio) {
    super(reactAxiosPortfolio);
    this.state = {
      methods: [
        {
          id: "0",
          image: "https://via.placeholder.com/2000x2000",
          heading: "Lorem ipsum",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: "1",
          image: "https://via.placeholder.com/2000x2000",
          heading: "Lorem ipsum",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: "2",
          image: "https://via.placeholder.com/2000x2000",
          heading: "Lorem ipsum",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
    };
  }

  render() {
    const { methods } = this.state;

    return (
      <>
        <section className="methods">
          <Container>
            <Row>
              {methods.map((reactAxiosPortfolio) => (
                <RevealCard
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

export default Methods;
