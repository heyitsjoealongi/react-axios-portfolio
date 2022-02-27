import React from "react";

import { Container } from "reactstrap";

import Solution from "../hoc/solution";
import SolutionVideo from "../hoc/solution-video";

class Solutions extends React.Component {
  constructor(reactAxiosPortfolio) {
    super(reactAxiosPortfolio);
    this.state = {
      solution: [
        {
          id: "0",
          image: "https://via.placeholder.com/2000x2000",
          preheading: "Lorem ipsum",
          heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          paragraph:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
      ],
      solutionvideo: [
        {
          id: "0",
          image: "https://via.placeholder.com/2000x2000",
          preheading: "Lorem ipsum",
          heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          paragraph:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
      ],
    };
  }

  render() {
    const { solution, solutionvideo } = this.state;

    return (
      <>
        <section className="solutions">
          <Container fluid={true}>
            {solution.map((reactAxiosPortfolio) => (
              <Solution
                key={reactAxiosPortfolio.id}
                image={reactAxiosPortfolio.image}
                preheading={reactAxiosPortfolio.preheading}
                heading={reactAxiosPortfolio.heading}
                paragraph={reactAxiosPortfolio.paragraph}
              />
            ))}
            {solutionvideo.map((reactAxiosPortfolio) => (
              <SolutionVideo
                key={reactAxiosPortfolio.id}
                image={reactAxiosPortfolio.image}
                preheading={reactAxiosPortfolio.preheading}
                heading={reactAxiosPortfolio.heading}
                paragraph={reactAxiosPortfolio.paragraph}
              />
            ))}
          </Container>
        </section>
      </>
    );
  }
}

export default Solutions;
