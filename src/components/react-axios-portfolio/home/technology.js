import React from "react";

import { Container, Row, Col } from "reactstrap";

import Medias from "../hoc/medias";

class Technology extends React.Component {
  constructor(reactAxiosPortfolio) {
    super(reactAxiosPortfolio);
    this.state = {
      technologies: [
        {
          id: "0",
          image: "https://via.placeholder.com/2000x2000",
          heading: "Lorem ipsum",
          paragraph:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          id: "1",
          image: "https://via.placeholder.com/2000x2000",
          heading: "Lorem ipsum",
          paragraph:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          id: "2",
          image: "https://via.placeholder.com/2000x2000",
          heading: "Lorem ipsum",
          paragraph:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          id: "3",
          image: "https://via.placeholder.com/2000x2000",
          heading: "Lorem ipsum",
          paragraph:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          id: "4",
          image: "https://via.placeholder.com/2000x2000",
          heading: "Lorem ipsum",
          paragraph:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          id: "5",
          image: "https://via.placeholder.com/2000x2000",
          heading: "Lorem ipsum",
          paragraph:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
      ],
    };
  }

  render() {
    const { technologies } = this.state;

    return (
      <>
        <section className="technologies">
          <Container>
            <Row>
              <Col xl="12">
                <article className="heading">
                  <h6 className="muted">Lorem ipsum dolor</h6>
                  <h2>Ut enim ad minim veniam</h2>
                </article>
              </Col>
            </Row>
            <Row>
              {technologies.map((reactAxiosPortfolio) => (
                <Medias
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

export default Technology;
