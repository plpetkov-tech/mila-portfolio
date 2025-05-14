import React from "react"

const Input = ({ placeholder, type, name, className = "" }) => {
  return (
    <input
      type={type || "text"}
      name={name}
      placeholder={placeholder}
      className={`px-2 py-2 rounded-lg bg-dp border-transparent flex-1 appearance-none text-white placeholder-white placeholder-opacity-70 outline-none ring-2 ring-purple border-transparent sm:width-full md:width-full xxs:text-sm ${className}`}
    ></input>
  )
}

export default Input
