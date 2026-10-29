import React from "react";
import Button from "../Button";

import yourData from "../../data/portfolio.json";

const Socials = ({ className = "" }) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {yourData.socials.map((social) => (
        <Button key={social.id} href={social.link}>
          {social.title}
        </Button>
      ))}
    </div>
  );
};

export default Socials;
