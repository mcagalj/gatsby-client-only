import * as React from "react";
import { Link } from "gatsby";
import { Router } from "@reach/router";
import Profile from "../../components/profile";
import Details from "../../components/details";

const ClientOnlyPageTemplate = (props) => {
  const path = props.params["*"];
  return (
    <main>
      <title>Client-only routes page</title>
      <h1>
        Rendering page at path: <em>{path}</em>
      </h1>

      <Router basepath="/client-only-routes">
        <Profile path="/profile" />
        <Details path="/details" />
      </Router>

      <ul>
        <li>
          <Link to={"/client-only-routes/profile"}>
            Show <em>Profile</em> component
          </Link>
        </li>
        <li>
          <Link to={"/client-only-routes/details"}>
            Show <em>Details</em> component
          </Link>
        </li>
        <li>
          <Link to={"/client-only-routes/cat-32"}>
            Back to client-only-routes
          </Link>
        </li>
        <li>
          <Link to={"/"}>Back home</Link>
        </li>
      </ul>
    </main>
  );
};

export default ClientOnlyPageTemplate;
