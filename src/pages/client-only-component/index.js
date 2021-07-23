import * as React from "react";
import { Link } from "gatsby";
import Universal from "../../components/universal-component";
import ClientOnly from "../../components/client-only-component";

const StaticPage = () => {
  // Try to detect if the code is running server-side
  const isSSR = typeof window === "undefined";

  return (
    <main>
      <title>Client-only component</title>
      <h1>Client-only component</h1>

      <hr />
      <p>I render on both server and client side</p>
      <Universal />
      <hr />

      <h4>
        I render only on the client side since I use/reference the{" "}
        <em>window</em> interface that exist only client-side.
      </h4>
      {isSSR ? <p>Loading ...</p> : <ClientOnly />}
      <hr />

      <p>
        <Link to={"/"}>Back home</Link>
      </p>
    </main>
  );
};

export default StaticPage;
