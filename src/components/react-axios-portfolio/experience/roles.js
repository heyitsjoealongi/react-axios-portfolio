import React from "react";

import { Container, Row, Col } from "reactstrap";

import MediasWide from "../hoc/medias-wide";

class Roles extends React.Component {
  constructor(reactAxiosPortfolio) {
    super(reactAxiosPortfolio);
    this.state = {
      roles: [
        {
          id: "0",
          image: "https://via.placeholder.com/2000x2000",
          subheading: "2010 - Present",
          heading: "Lorem ipsum",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          link: "/",
        },
        {
          id: "1",
          image: "https://via.placeholder.com/2000x2000",
          subheading: "2009 - 2010",
          heading: "Lorem ipsum",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          link: "/",
        },
        {
          id: "2",
          image: "https://via.placeholder.com/2000x2000",
          subheading: "2008 - 2009",
          heading: "Lorem ipsum",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          link: "/",
        },
        {
          id: "3",
          image: "https://via.placeholder.com/2000x2000",
          subheading: "2007 - 2008",
          heading: "Lorem ipsum",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          link: "/",
        },
        {
          id: "4",
          image: "https://via.placeholder.com/2000x2000",
          subheading: "2006 - 2007",
          heading: "Lorem ipsum",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          link: "/",
        },
        {
          id: "5",
          image: "https://via.placeholder.com/2000x2000",
          subheading: "2005 - 2006",
          heading: "Lorem ipsum",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          link: "/",
        },
        {
          id: "6",
          image: "https://via.placeholder.com/2000x2000",
          subheading: "2004 - 2005",
          heading: "Lorem ipsum",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          link: "/",
        },
        {
          id: "7",
          image: "https://via.placeholder.com/2000x2000",
          subheading: "2003 - 2004",
          heading: "Lorem ipsum",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          link: "/",
        },
        {
          id: "8",
          image: "https://via.placeholder.com/2000x2000",
          subheading: "2002 - 2003",
          heading: "Lorem ipsum",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          link: "/",
        },
        {
          id: "9",
          image: "https://via.placeholder.com/2000x2000",
          subheading: "2001 - 2002",
          heading: "Lorem ipsum",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          link: "/",
        },
      ],
    };
  }

  render() {
    const { roles } = this.state;

    return (
      <>
        <section className="roles">
          <Container>
            <Row>
              <Col xl="12">
                <article className="heading">
                  <h6 className="muted">Work &amp; Studies</h6>
                  <h2>Professional Experiences</h2>
                </article>
              </Col>
            </Row>
            <Row>
              {roles.map((reactAxiosPortfolio) => (
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

export default Roles;
