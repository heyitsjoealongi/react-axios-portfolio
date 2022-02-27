import React, { useState } from "react";

import { Link } from "react-router-dom";

import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarText,
  Button,
} from "reactstrap";

import { ReactComponent as Logo } from "../logo.svg";

const Navigation = (reactportfolio) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const close = () => setIsOpen(false);

  return (
    <>
      <nav className="navigation sticky-top">
        <Container>
          <Row>
            <Col xl="12">
              <Navbar dark expand="xl">
                <Link to="/" aria-label="Go to Home">
                  <Logo
                    alt="reactportfolio"
                    width="60"
                    height="60"
                    loading="lazy"
                    onClick={close}
                  />
                </Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                  <Nav className="mr-auto" navbar>
                    <NavItem>
                      <Link
                        to="/experience"
                        onClick={close}
                        aria-label="Experience"
                      >
                        Experience
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/work" onClick={close} aria-label="Work">
                        Work
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/about" onClick={close} aria-label="About">
                        About
                      </Link>
                    </NavItem>
                  </Nav>
                  <NavbarText>
                    <div className="navigation-contact flxb">
                      <Button
                        href="mailto:email@email.com"
                        className="button-cta"
                        onClick={close}
                        aria-label="Contact"
                      >
                        Contact
                      </Button>
                    </div>
                  </NavbarText>
                </Collapse>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </nav>
    </>
  );
};

export default Navigation;
