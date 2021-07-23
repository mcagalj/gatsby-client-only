import * as React from "react";
import { Link } from "gatsby";

const links = [
  { text: "Home", link: "/" },
  { text: "Static pages", link: "/static" },
  { text: "Client-only routes", link: "/client-only-routes/cat-32" },
  { text: "Client-only component", link: "/client-only-component" },
];

const IndexPage = () => {
  return (
    <main>
      <title>Client-only routes</title>
      <h1>Home page</h1>
      <h3>Demoing client-only routes using new file system routing API</h3>
      <ul>
        {links.map((link) => (
          <li key={link.text}>
            <Link to={link.link}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default IndexPage;
