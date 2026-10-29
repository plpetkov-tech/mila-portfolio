import React from "react";

// `html` is rendered from markdown at build time (see utils/api.js)
const ContentSection = ({ html }) => {
  return (
    <div className="markdown-class" dangerouslySetInnerHTML={{ __html: html }} />
  );
};

export default ContentSection;
