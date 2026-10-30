import React from "react";
import Socials from "../Socials";
import Button from "../Button";
import data from "../../data/portfolio.json";

const Footer = () => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Contact.</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S CREATE
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold text-gradient">
              TOGETHER
            </h1>
            <Button type="primary" href="/contact/" classes="mt-10 laptop:mt-14 mb-6">
              Get in touch
            </Button>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="font-body text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0 opacity-50">
        &copy; {new Date().getFullYear()} {data.name}. All Rights Reserved.
      </h1>
    </>
  );
};

export default Footer;
