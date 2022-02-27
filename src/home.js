import React from "react";

import Header from "./components/home/header";
import Focuses from "./components/home/focuses";
import Solutions from "./components/home/solutions";
import Technology from "./components/home/technology";
import Process from "./components/home/process";
import Highlights from "./components/home/highlights";

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
