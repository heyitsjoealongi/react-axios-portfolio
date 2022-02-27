import React from "react";

import { Container, Row, Col, Button } from "reactstrap";

import Project from "../hoc/project";

import { Tooltip } from "react-tippy";

class Projects extends React.Component {
  constructor(reactAxiosPortfolio) {
    super(reactAxiosPortfolio);
    this.state = {
      isAllFilter: true,
      isReactFilter: false,
      isEcommerceFilter: false,
      isWordPressFilter: false,
      isJavaScriptFilter: false,
      isBootstrapFilter: false,
      all: [
        {
          id: "0",
          image: "https://via.placeholder.com/2000x2000",
          subheading: "Lorem ipsum",
          heading: "dolor sit amet",
          paragraph:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          link: "/",
        },
        {
          id: "1",
          image: "https://via.placeholder.com/2000x2000",
          subheading: "Lorem ipsum",
          heading: "dolor sit amet",
          paragraph:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          link: "/",
        },
        {
          id: "2",
          image: "https://via.placeholder.com/2000x2000",
          subheading: "Lorem ipsum",
          heading: "dolor sit amet",
          paragraph:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          link: "/",
        },
        {
          id: "3",
          image: "https://via.placeholder.com/2000x2000",
          subheading: "Lorem ipsum",
          heading: "dolor sit amet",
          paragraph:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          link: "/",
        },
        {
          id: "4",
          image: "https://via.placeholder.com/2000x2000",
          subheading: "Lorem ipsum",
          heading: "dolor sit amet",
          paragraph:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          link: "/",
        },
        {
          id: "5",
          image: "https://via.placeholder.com/2000x2000",
          subheading: "Lorem ipsum",
          heading: "dolor sit amet",
          paragraph:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          link: "https://support.hplfmedia.com/docs",
        },
        {
          id: "6",
          image: "https://via.placeholder.com/2000x2000",
          subheading: "Lorem ipsum",
          heading: "dolor sit amet",
          paragraph:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          link: "/",
        },
        {
          id: "7",
          image: "https://via.placeholder.com/2000x2000",
          subheading: "Lorem ipsum",
          heading: "dolor sit amet",
          paragraph:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          link: "/",
        },
        {
          id: "8",
          image: "https://via.placeholder.com/2000x2000",
          subheading: "Lorem ipsum",
          heading: "dolor sit amet",
          paragraph:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          link: "/",
        },
        {
          id: "9",
          image: "https://via.placeholder.com/2000x2000",
          subheading: "Lorem ipsum",
          heading: "dolor sit amet",
          paragraph:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          link: "/",
        },
        {
          id: "10",
          image: "https://via.placeholder.com/2000x2000",
          subheading: "Lorem ipsum",
          heading: "dolor sit amet",
          paragraph:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          link: "/",
        },
        {
          id: "11",
          image: "https://via.placeholder.com/2000x2000",
          subheading: "Lorem ipsum",
          heading: "dolor sit amet",
          paragraph:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          link: "/",
        },
        {
          id: "12",
          image: "https://via.placeholder.com/2000x2000",
          subheading: "Lorem ipsum",
          heading: "dolor sit amet",
          paragraph:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          link: "/",
        },
        {
          id: "13",
          image: "https://via.placeholder.com/2000x2000",
          subheading: "Lorem ipsum",
          heading: "dolor sit amet",
          paragraph:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          link: "/",
        },
      ],
      react: [
        {
          id: "15",
          image: "https://via.placeholder.com/2000x2000",
          subheading: "Lorem ipsum",
          heading: "dolor sit amet",
          paragraph:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          link: "/",
        },
        {
          id: "16",
          image: "https://via.placeholder.com/2000x2000",
          subheading: "Lorem ipsum",
          heading: "dolor sit amet",
          paragraph:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          link: "https://react-ventures.vercel.app/",
        },
        {
          id: "17",
          image: "https://via.placeholder.com/2000x2000",
          subheading: "Lorem ipsum",
          heading: "dolor sit amet",
          paragraph:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          link: "/",
        },
        {
          id: "18",
          image: "https://via.placeholder.com/2000x2000",
          subheading: "Lorem ipsum",
          heading: "dolor sit amet",
          paragraph:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          link: "/",
        },
      ],
      ecommerce: [
        {
          id: "19",
          image: "https://via.placeholder.com/2000x2000",
          subheading: "Lorem ipsum",
          heading: "dolor sit amet",
          paragraph:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          link: "/",
        },
        {
          id: "20",
          image: "https://via.placeholder.com/2000x2000",
          subheading: "Lorem ipsum",
          heading: "dolor sit amet",
          paragraph:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          link: "/",
        },
      ],
      wordpress: [
        {
          id: "22",
          image: "https://via.placeholder.com/2000x2000",
          subheading: "Lorem ipsum",
          heading: "dolor sit amet",
          paragraph:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          link: "/",
        },
        {
          id: "23",
          image: "https://via.placeholder.com/2000x2000",
          subheading: "Lorem ipsum",
          heading: "dolor sit amet",
          paragraph:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          link: "/",
        },
        {
          id: "24",
          image: "https://via.placeholder.com/2000x2000",
          subheading: "Lorem ipsum",
          heading: "dolor sit amet",
          paragraph:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          link: "/",
        },
        {
          id: "26",
          image: "https://via.placeholder.com/2000x2000",
          subheading: "Lorem ipsum",
          heading: "dolor sit amet",
          paragraph:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          link: "/",
        },
      ],
      javascript: [
        {
          id: "26",
          image: "https://via.placeholder.com/2000x2000",
          subheading: "Lorem ipsum",
          heading: "dolor sit amet",
          paragraph:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          link: "/",
        },
        {
          id: "27",
          image: "https://via.placeholder.com/2000x2000",
          subheading: "Lorem ipsum",
          heading: "dolor sit amet",
          paragraph:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          link: "/",
        },
      ],
      bootstrap: [
        {
          id: "28",
          image: "https://via.placeholder.com/2000x2000",
          subheading: "Lorem ipsum",
          heading: "dolor sit amet",
          paragraph:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          link: "/",
        },
        {
          id: "29",
          image: "https://via.placeholder.com/2000x2000",
          subheading: "Lorem ipsum",
          heading: "dolor sit amet",
          paragraph:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          link: "/",
        },
      ],
    };
  }

  toggleAllFilter() {
    this.setState({
      isAllFilter: true,
    });
    if (this.state.isReactFilter) {
      return this.setState({ isReactFilter: false });
    }
    if (this.state.isEcommerceFilter) {
      return this.setState({
        isEcommerceFilter: false,
      });
    }
    if (this.state.isWordPressFilter) {
      return this.setState({
        isWordPressFilter: false,
      });
    }
    if (this.state.isJavaScriptFilter) {
      return this.setState({
        isJavaScriptFilter: false,
      });
    }
    if (this.state.isBootstrapFilter) {
      return this.setState({
        isBootstrapFilter: false,
      });
    }
  }

  toggleReactFilter() {
    this.setState({
      isReactFilter: true,
    });
    if (this.state.isAllFilter) {
      return this.setState({ isAllFilter: false });
    }
    if (this.state.isEcommerceFilter) {
      return this.setState({
        isEcommerceFilter: false,
      });
    }
    if (this.state.isWordPressFilter) {
      return this.setState({
        isWordPressFilter: false,
      });
    }
    if (this.state.isJavaScriptFilter) {
      return this.setState({
        isJavaScriptFilter: false,
      });
    }
    if (this.state.isBootstrapFilter) {
      return this.setState({
        isBootstrapFilter: false,
      });
    }
  }

  toggleEcommerceFilter() {
    this.setState({
      isEcommerceFilter: true,
    });
    if (this.state.isAllFilter) {
      return this.setState({ isAllFilter: false });
    }
    if (this.state.isReactFilter) {
      return this.setState({ isReactFilter: false });
    }
    if (this.state.isWordPressFilter) {
      return this.setState({
        isWordPressFilter: false,
      });
    }
    if (this.state.isJavaScriptFilter) {
      return this.setState({
        isJavaScriptFilter: false,
      });
    }
    if (this.state.isBootstrapFilter) {
      return this.setState({
        isBootstrapFilter: false,
      });
    }
  }

  toggleWordPressFilter() {
    this.setState({
      isWordPressFilter: true,
    });
    if (this.state.isAllFilter) {
      return this.setState({ isAllFilter: false });
    }
    if (this.state.isReactFilter) {
      return this.setState({ isReactFilter: false });
    }
    if (this.state.isEcommerceFilter) {
      return this.setState({
        isEcommerceFilter: false,
      });
    }
    if (this.state.isJavaScriptFilter) {
      return this.setState({
        isJavaScriptFilter: false,
      });
    }
    if (this.state.isBootstrapFilter) {
      return this.setState({
        isBootstrapFilter: false,
      });
    }
  }

  toggleJavaScriptFilter() {
    this.setState({
      isJavaScriptFilter: true,
    });
    if (this.state.isAllFilter) {
      return this.setState({ isAllFilter: false });
    }
    if (this.state.isReactFilter) {
      return this.setState({ isReactFilter: false });
    }
    if (this.state.isEcommerceFilter) {
      return this.setState({
        isEcommerceFilter: false,
      });
    }
    if (this.state.isWordPressFilter) {
      return this.setState({
        isWordPressFilter: false,
      });
    }
    if (this.state.isBootstrapFilter) {
      return this.setState({
        isBootstrapFilter: false,
      });
    }
  }

  toggleBootstrapFilter() {
    this.setState({
      isBootstrapFilter: true,
    });
    if (this.state.isAllFilter) {
      return this.setState({ isAllFilter: false });
    }
    if (this.state.isReactFilter) {
      return this.setState({ isReactFilter: false });
    }
    if (this.state.isEcommerceFilter) {
      return this.setState({
        isEcommerceFilter: false,
      });
    }
    if (this.state.isWordPressFilter) {
      return this.setState({
        isWordPressFilter: false,
      });
    }
    if (this.state.isJavaScriptFilter) {
      return this.setState({
        isJavaScriptFilter: false,
      });
    }
  }

  render() {
    const { all, react, ecommerce, wordpress, javascript, bootstrap } =
      this.state;

    return (
      <>
        <section className="projects">
          <Container>
            <Row>
              <Col xl="12">
                <article className="heading">
                  <h5 className="muted">Lorem ipsum dolor sit amet</h5>
                  <h2>Sconsectetur adipiscing elit</h2>
                  <div className="button-group">
                    <Tooltip
                      title={all.length}
                      position="top"
                      hideOnClick="persistent"
                      arrow="true"
                      animation="shift"
                      duration={[0, 600]}
                      Delay={[0, 600]}
                      hideDelay={[0, 600]}
                      distance="36"
                    >
                      <Button
                        onClick={this.toggleAllFilter.bind(this)}
                        className="btn button-text btn-flex"
                        aria-label="All"
                      >
                        All
                      </Button>
                    </Tooltip>
                    <Tooltip
                      title={react.length}
                      position="top"
                      hideOnClick="persistent"
                      arrow="true"
                      animation="shift"
                      duration={[0, 600]}
                      Delay={[0, 600]}
                      hideDelay={[0, 600]}
                      distance="36"
                    >
                      <Button
                        onClick={this.toggleReactFilter.bind(this)}
                        className="btn button-text btn-flex"
                        aria-label="React"
                      >
                        React
                      </Button>
                    </Tooltip>
                    <Tooltip
                      title={ecommerce.length}
                      position="top"
                      hideOnClick="persistent"
                      arrow="true"
                      animation="shift"
                      duration={[0, 600]}
                      Delay={[0, 600]}
                      hideDelay={[0, 600]}
                      distance="36"
                    >
                      <Button
                        onClick={this.toggleEcommerceFilter.bind(this)}
                        className="btn button-text btn-flex"
                        aria-label="Ecommerce"
                      >
                        Ecommerce
                      </Button>
                    </Tooltip>
                    <Tooltip
                      title={wordpress.length}
                      position="top"
                      hideOnClick="persistent"
                      arrow="true"
                      animation="shift"
                      duration={[0, 600]}
                      Delay={[0, 600]}
                      hideDelay={[0, 600]}
                      distance="36"
                    >
                      <Button
                        onClick={this.toggleWordPressFilter.bind(this)}
                        className="btn button-text btn-flex"
                        aria-label="WordPress"
                      >
                        WordPress
                      </Button>
                    </Tooltip>
                    <Tooltip
                      title={javascript.length}
                      position="top"
                      hideOnClick="persistent"
                      arrow="true"
                      animation="shift"
                      duration={[0, 600]}
                      Delay={[0, 600]}
                      hideDelay={[0, 600]}
                      distance="36"
                    >
                      <Button
                        onClick={this.toggleJavaScriptFilter.bind(this)}
                        className="btn button-text btn-flex"
                        aria-label="JavaScript"
                      >
                        JavaScript
                      </Button>
                    </Tooltip>
                    <Tooltip
                      title={bootstrap.length}
                      position="top"
                      hideOnClick="persistent"
                      arrow="true"
                      animation="shift"
                      duration={[0, 600]}
                      Delay={[0, 600]}
                      hideDelay={[0, 600]}
                      distance="36"
                    >
                      <Button
                        onClick={this.toggleBootstrapFilter.bind(this)}
                        className="btn button-text btn-flex"
                        aria-label="Bootstrap"
                      >
                        Bootstrap
                      </Button>
                    </Tooltip>
                  </div>
                </article>
              </Col>
            </Row>
            {this.state.isAllFilter && (
              <Row>
                {all.map((reactAxiosPortfolio) => (
                  <Col xl="6" key={reactAxiosPortfolio.id}>
                    <Project
                      tag={reactAxiosPortfolio.tag}
                      image={reactAxiosPortfolio.image}
                      subheading={reactAxiosPortfolio.subheading}
                      heading={reactAxiosPortfolio.heading}
                      paragraph={reactAxiosPortfolio.paragraph}
                      link={reactAxiosPortfolio.link}
                    />
                  </Col>
                ))}
              </Row>
            )}
            {this.state.isReactFilter && (
              <Row>
                {react.map((reactAxiosPortfolio) => (
                  <Col xl="6" key={reactAxiosPortfolio.id}>
                    <Project
                      tag={reactAxiosPortfolio.tag}
                      image={reactAxiosPortfolio.image}
                      subheading={reactAxiosPortfolio.subheading}
                      heading={reactAxiosPortfolio.heading}
                      paragraph={reactAxiosPortfolio.paragraph}
                      link={reactAxiosPortfolio.link}
                    />
                  </Col>
                ))}
              </Row>
            )}
            {this.state.isEcommerceFilter && (
              <Row>
                {ecommerce.map((reactAxiosPortfolio) => (
                  <Col xl="6" key={reactAxiosPortfolio.id}>
                    <Project
                      tag={reactAxiosPortfolio.tag}
                      image={reactAxiosPortfolio.image}
                      subheading={reactAxiosPortfolio.subheading}
                      heading={reactAxiosPortfolio.heading}
                      paragraph={reactAxiosPortfolio.paragraph}
                      link={reactAxiosPortfolio.link}
                    />
                  </Col>
                ))}
              </Row>
            )}
            {this.state.isWordPressFilter && (
              <Row>
                {wordpress.map((reactAxiosPortfolio) => (
                  <Col xl="6" key={reactAxiosPortfolio.id}>
                    <Project
                      tag={reactAxiosPortfolio.tag}
                      image={reactAxiosPortfolio.image}
                      subheading={reactAxiosPortfolio.subheading}
                      heading={reactAxiosPortfolio.heading}
                      paragraph={reactAxiosPortfolio.paragraph}
                      link={reactAxiosPortfolio.link}
                    />
                  </Col>
                ))}
              </Row>
            )}
            {this.state.isJavaScriptFilter && (
              <Row>
                {javascript.map((reactAxiosPortfolio) => (
                  <Col xl="6" key={reactAxiosPortfolio.id}>
                    <Project
                      tag={reactAxiosPortfolio.tag}
                      image={reactAxiosPortfolio.image}
                      subheading={reactAxiosPortfolio.subheading}
                      heading={reactAxiosPortfolio.heading}
                      paragraph={reactAxiosPortfolio.paragraph}
                      link={reactAxiosPortfolio.link}
                    />
                  </Col>
                ))}
              </Row>
            )}
            {this.state.isBootstrapFilter && (
              <Row>
                {bootstrap.map((reactAxiosPortfolio) => (
                  <Col xl="6" key={reactAxiosPortfolio.id}>
                    <Project
                      tag={reactAxiosPortfolio.tag}
                      image={reactAxiosPortfolio.image}
                      subheading={reactAxiosPortfolio.subheading}
                      heading={reactAxiosPortfolio.heading}
                      paragraph={reactAxiosPortfolio.paragraph}
                      link={reactAxiosPortfolio.link}
                    />
                  </Col>
                ))}
              </Row>
            )}
          </Container>
        </section>
      </>
    );
  }
}

export default Projects;
