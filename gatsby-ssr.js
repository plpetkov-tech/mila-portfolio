/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

import React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="comfortaa-font"
      href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400&display=swap"
      rel="stylesheet"
    />,
  ]);
}
