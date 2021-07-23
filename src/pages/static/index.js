import * as React from "react";
import { Link } from "gatsby";

const StaticPages = () => {
  return (
    <main>
      <title>Static pages</title>
      <h1>Static pages</h1>
      <ul>
        <li>
          <Link to={"/static/static-1"}>Static page 1</Link>
        </li>
        <li>
          <Link to={"/static/static-2"}>Static page 2</Link>
        </li>
        <li>
          <Link to={"/"}>Back home</Link>
        </li>
      </ul>
    </main>
  );
};

export default StaticPages;
