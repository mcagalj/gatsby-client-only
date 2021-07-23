import * as React from "react";
import { Link } from "gatsby";

const ClientOnlyPageTemplate = (props) => {
  const path = props.params["*"];
  return (
    <main>
      <title>Client-only routes page</title>
      <h1>
        Rendering page at path: <em>{path}</em>
      </h1>
      <p>
        <Link to={"/"}>Back home</Link>
      </p>
    </main>
  );
};

export default ClientOnlyPageTemplate;
