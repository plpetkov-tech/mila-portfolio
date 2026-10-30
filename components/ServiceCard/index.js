import React from "react";

const ServiceCard = ({ name, description }) => {
  return (
    <div className="w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 hover:bg-sand dark:hover:bg-slate-900 hover:scale-105 link">
      <h1 className="text-3xl">{name ? name : "Heading"}</h1>
      <p className="mt-5 opacity-50 text-xl">{description}</p>
    </div>
  );
};

export default ServiceCard;
