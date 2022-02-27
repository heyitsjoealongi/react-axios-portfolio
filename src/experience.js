import React from "react";

import Header from "./components/react-axios-portfolio/experience/header";
import Methods from "./components/react-axios-portfolio/experience/methods";
import Roles from "./components/react-axios-portfolio/experience/roles";

function About() {
  return (
    <>
      <title>Experience</title>
      <meta name="title" content="About" />
      <meta name="description" content="react-axios-portfolio — Experience" />
      <main>
        <Header />
        <Methods />
        <Roles />
      </main>
    </>
  );
}

export default About;
