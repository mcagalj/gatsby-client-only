# Demoing client-only routes and client-only components in Gatsby

## Client-only routes

Here we use a new Gatsby [File System Route API](https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/). Try to open the page under `client-only-routes` and update the path (after `client-only-routes`) at will and reload to see the effect.

## Client-only components

We show the simplest way to handle components that cannot be rendered server-side (components that rely on Web API not present server-side). To better see the effect, try to setup network throttling and limit the speed of page loading (`Chrome DevTools > Network tab`).
