import * as React from "react";
import { Link } from "gatsby";

const StaticPage = () => {
  return (
    <main>
      <title>Static page 1</title>
      <h1>Static page 1</h1>
      <ul>
        <li>
          <Link to={"/static"}>Back to Static Pages index</Link>
        </li>
        <li>
          <Link to={"/"}>Back home</Link>
        </li>
      </ul>
    </main>
  );
};

export default StaticPage;
