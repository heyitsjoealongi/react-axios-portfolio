import React from "react";

import NoMatchMessage from "./components/admin/no-match-message";

function NoMatch() {
  return (
    <>
      <meta name="robots" content="noindex" />
      <meta name="googlebot" content="noindex" />
      <title>404</title>
      <meta name="title" content="404" />
      <meta name="description" content="react-axios-portfolio — 404" />
      <main>
        <NoMatchMessage />
      </main>
    </>
  );
}

export default NoMatch;
