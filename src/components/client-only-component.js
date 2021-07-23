import * as React from "react";

const ClientOnly = () => (
  <div>
    <h3>Client-only component</h3>
    <p>My pathname: {window.location.pathname}</p>
  </div>
);

export default ClientOnly;
