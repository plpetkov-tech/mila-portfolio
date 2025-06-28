import { Link } from "gatsby"
import React from "react"

import logo from "../images/Group-12.png"

const Footer = () => {
  return (
    <div className="m-4">
      <div className="max-w-7xl mx-auto mt-10 h-auto lg:mb-8 sm:mb-4 xs:mb-4 xxs:mb-4">
        <div className="footer bg-gradient-to-r from-pink to-purple p-10 mt-10 rounded-xl">
          <div className="grid grid-cols-2 xxs:grid-cols-1 lg:grid-cols-2">
            <div>
              <img className="max-h-28 max-w-xs" src={logo} alt="Meela's Portfolio"></img>
              <p className="text-black opacity-70 text-sm mt-5 ">
                A stunning and minimal<br></br> website built with Gatsby, <br></br> 
                vibes and a bit of help from <a href="https://plamen.works" target="_blank" className="text-purple-900 font-bold underline hover:text-fuchsia-700 transition-colors">plamen.works</a>
              </p>
              <p className="text-white text-lg font-bold mt-20">
                <span className="text-black font-montserrat font-semibold mt-20">
                  &copy; {new Date().getFullYear()}. All Rights Reserved.
                </span>
              </p>
              <div className="text-black font-bold block-inline">
                <p>
                  <a className="text-black font-bold block-inline" href="/">
                    Meela's Portfolio
                  </a>
                  <br></br>
                    Made with ❤️
                  <a
                    href="https://github.com/lilxyzz/meela-portfolio"
                    target="_blank"
                  >
                  </a>
                </p>
              </div>
            </div>

            <div className="place-self-end self-center xxs:hidden lg:block">
              <ul className="text-xl font-montserrat font-medium">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <Link to="/arts">Arts</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
