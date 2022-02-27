import React from "react";

import Header from "./components/react-axios-portfolio/home/header";
import Focuses from "./components/react-axios-portfolio/home/focuses";
import Solutions from "./components/react-axios-portfolio/home/solutions";
import Technology from "./components/react-axios-portfolio/home/technology";
import Process from "./components/react-axios-portfolio/home/process";
import Highlights from "./components/react-axios-portfolio/home/highlights";

function Home() {
  return (
    <>
      <main>
        <Header />
        <Focuses />
        <Solutions />
        <Technology />
        <Process />
        <Highlights />
      </main>
    </>
  );
}

export default Home;
