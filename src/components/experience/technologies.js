import React from "react";

import Slide from "react-reveal/Slide";

class Technologies extends React.Component {
  constructor(reactAxiosPortfolio) {
    super(reactAxiosPortfolio);
    this.state = {
      technologies: [
        {
          id: "0",
          image: "https://via.placeholder.com/2000x2000",
          heading: "Lorem ipsum",
        },
        {
          id: "1",
          image: "https://via.placeholder.com/2000x2000",
          heading: "Lorem ipsum",
        },
        {
          id: "2",
          image: "https://via.placeholder.com/2000x2000",
          heading: "Lorem ipsum",
        },
        {
          id: "3",
          image: "https://via.placeholder.com/2000x2000",
          heading: "Lorem ipsum",
        },
        {
          id: "4",
          image: "https://via.placeholder.com/2000x2000",
          heading: "Lorem ipsum",
        },
        {
          id: "5",
          image: "https://via.placeholder.com/2000x2000",
          heading: "Lorem ipsum",
        },
      ],
    };
  }

  render() {
    const { technologies } = this.state;

    return (
      <>
        <section className="technology-stack">
          <Slide left>
            {technologies.map((reactAxiosPortfolio) => (
              <article className="technology" key={reactAxiosPortfolio.id}>
                <img
                  src={reactAxiosPortfolio.image}
                  alt={reactAxiosPortfolio.heading}
                  loading="lazy"
                  className="img-fluid"
                />
                <p>{reactAxiosPortfolio.heading}</p>
              </article>
            ))}
          </Slide>
        </section>
      </>
    );
  }
}

export default Technologies;
