import React from "react";

import { Link } from "react-router-dom";

import { Container, Row, Col } from "reactstrap";

import { ReactComponent as Logo } from "../logo.svg";

const Footer = (reactportfolio) => {
  return (
    <>
      <footer className="footer-main">
        <Container>
          <Row>
            <Col xl="6">
              <div className="footer-brand">
                <Link to="/" aria-label="Go to Home">
                  <Logo
                    alt="react-axios-portfolio"
                    width="60"
                    height="60"
                    loading="lazy"
                  />
                </Link>
              </div>
              <p>
                Lorem ipsum dolor sit amet,{" "}
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Go to consectetur adipiscing elit"
                >
                  consectetur adipiscing elit,
                </a>{" "}
                — sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
              <h6>commodo consequat</h6>
              <div className="social">
                <ul className="footer-social flx">
                  <li className="flxb">
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-icon"
                      aria-label="Twitter"
                    >
                      <i className="ri-twitter-line"></i>
                    </a>
                  </li>
                  <li className="flxb">
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-icon"
                      aria-label="GitHub"
                    >
                      <i className="ri-github-line"></i>
                    </a>
                  </li>
                  <li className="flxb">
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-icon"
                      aria-label="GitLab"
                    >
                      <i className="ri-gitlab-line"></i>
                    </a>
                  </li>
                  <li className="flxb">
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-icon"
                      aria-label="Medium"
                    >
                      <i className="ri-medium-line"></i>
                    </a>
                  </li>
                  <li className="flxb">
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-icon"
                      aria-label="Instagram"
                    >
                      <i className="ri-instagram-line"></i>
                    </a>
                  </li>
                  <li className="flxb">
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-icon"
                      aria-label="LinkedIn"
                    >
                      <i className="ri-linkedin-line"></i>
                    </a>
                  </li>
                  <li className="flxb">
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-icon"
                      aria-label="Facebook"
                    >
                      <i className="ri-facebook-line"></i>
                    </a>
                  </li>
                  <li className="flxb">
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-icon"
                      aria-label="Dribbble"
                    >
                      <i className="ri-dribbble-line"></i>
                    </a>
                  </li>
                  <li className="flxb">
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-icon"
                      aria-label="Behance"
                    >
                      <i className="ri-behance-line"></i>
                    </a>
                  </li>
                </ul>
                <ul className="footer-social flx">
                  <li className="flxb">
                    <a
                      href="https://www.figma.com/@reactportfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-icon"
                      aria-label="Figma"
                    >
                      <i className="ri-quill-pen-line"></i>
                    </a>
                  </li>
                  <li className="flxb">
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-icon"
                      aria-label="YouTube"
                    >
                      <i className="ri-youtube-line"></i>
                    </a>
                  </li>
                  <li className="flxb">
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-icon"
                      aria-label="Twitch"
                    >
                      <i className="ri-twitch-line"></i>
                    </a>
                  </li>
                  <li className="flxb">
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-icon"
                      aria-label="Unsplash"
                    >
                      <i className="ri-unsplash-line"></i>
                    </a>
                  </li>
                  <li className="flxb">
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-icon"
                      aria-label="Product Hunt"
                    >
                      <i className="ri-product-hunt-line"></i>
                    </a>
                  </li>
                  <li className="flxb">
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-icon"
                      aria-label="Messenger"
                    >
                      <i className="ri-messenger-line"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xl="3">
              <h4>Navigation</h4>
              <ul className="footer-navigation">
                <li>
                  <Link to="/experience" aria-label="Experience">
                    Experience
                  </Link>
                </li>
                <li>
                  <Link to="/work" aria-label="Work">
                    Work
                  </Link>
                </li>
                <li>
                  <Link to="/about" aria-label="About">
                    About
                  </Link>
                </li>
              </ul>
            </Col>
            <Col xl="3">
              <h4>Contact</h4>
              <ul className="footer-contact list-inline">
                <li>
                  <a
                    className="flx list-inline-item"
                    href="mailto:email@email.com"
                    aria-label="Email"
                  >
                    <i className="ri-mail-send-line"></i>
                    <span className="flxb">&nbsp;email@email.com</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flx list-inline-item"
                    href="tel:+11111111111"
                    aria-label="Call"
                  >
                    <i className="ri-smartphone-line"></i>
                    <span className="flxb">&nbsp;+1-111-111-1111</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flx"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Location"
                  >
                    <i className="ri-map-pin-line"></i>
                    <span className="flxb">quis nostrud</span>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col xl="12">
              <div className="copyright">
                <hr />
                <div className="content">
                  <span>
                    <a href="mailto:email@email.com" aria-label="Contact">
                      commodo consequat
                    </a>
                  </span>
                  <span>
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flx"
                      aria-label="Copyright"
                    >
                      © {new Date().getUTCFullYear()} react-axios-portfolio
                    </a>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
