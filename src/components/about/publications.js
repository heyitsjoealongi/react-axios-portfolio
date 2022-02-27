import React from "react";

import { Container, Row, Col } from "reactstrap";

import MediasWide from "../hoc/medias-wide";

class Publications extends React.Component {
  constructor(reactAxiosPortfolio) {
    super(reactAxiosPortfolio);
    this.state = {
      publications: [
        {
          id: "0",
          image: "https://via.placeholder.com/2000x2000",
          subheading: "Lorem ipsum",
          heading: "Lorem ipsum",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          link: "/",
        },
        {
          id: "1",
          image: "https://via.placeholder.com/2000x2000",
          subheading: "Lorem ipsum",
          heading: "Lorem ipsum",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          link: "/",
        },
        {
          id: "2",
          image: "https://via.placeholder.com/2000x2000",
          subheading: "Lorem ipsum",
          heading: "Lorem ipsum",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          link: "/",
        },
        {
          id: "3",
          image: "https://via.placeholder.com/2000x2000",
          subheading: "Lorem ipsum",
          heading: "Lorem ipsum",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          link: "/",
        },
      ],
    };
  }

  render() {
    const { publications } = this.state;

    return (
      <>
        <section className="publications">
          <Container>
            <Row>
              <Col xl="12">
                <article className="heading">
                  <h6 className="muted">Lorem ipsum</h6>
                  <h2>Lorem ipsum</h2>
                </article>
              </Col>
            </Row>
            <Row>
              {publications.map((reactAxiosPortfolio) => (
                <MediasWide
                  key={reactAxiosPortfolio.id}
                  image={reactAxiosPortfolio.image}
                  subheading={reactAxiosPortfolio.subheading}
                  heading={reactAxiosPortfolio.heading}
                  paragraph={reactAxiosPortfolio.paragraph}
                  link={reactAxiosPortfolio.link}
                />
              ))}
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Publications;
