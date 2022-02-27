import React from "react";

import Header from "./components/about/header";
import Publications from "./components/about/publications";

function About() {
  return (
    <>
      <title>About</title>
      <meta name="title" content="About" />
      <meta name="description" content="react-axios-portfolio — About" />
      <main>
        <Header />
        <Publications />
      </main>
    </>
  );
}

export default About;
