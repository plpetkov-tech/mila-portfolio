import React from "react"
import Fade from "react-reveal/Fade"

import hero from "../../images/removed-Holographic.png"

const Header = () => {
  return (
    <Fade duration={2200}>
      <div className="max-w-7xl mx-auto lg:px-6 md:px-3">
        <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-0 xl:mt-28 flex gap-10 lg:flex-justify lg:flex flex-col lg:flex-row flex-col-reverse">
          <div className="text-center lg:text-left flex flex-col justify-center">
            <h1 className="text-black text-4xl font-semibold opacity-70">
              MY NAME IS MEELA
            </h1>
            <h2 className="text-black text-gradient bg-gradient-to-r from-pink to-purple text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl">
              UI/UX Designer
            </h2>
            <p className="mt-2 text-lg text-black-70 font-semibold opacity-80">
              Creating user-centered designs where art meets functionality
            </p>
            <p className="mt-3 text-base text-black-70 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              My goal as a UI/UX designer is to create beautiful, minimalistic but functional designs with high focus on accessibility. My passion for drawing, the technical skills that I gained and my solid corporate experience help me to achieve the desired results whereby I always follow the following principles: consistency, accessibility, empathy and simplicity.
            </p>

            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md">
                <a
                  href="/contact"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-black border border-purple  hover:bg-transparent md:text-lg md:px-10 "
                >
                  Contact Me
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4 flex lg:justify-end justify-center">
            <img
              className="rounded-xl w-auto h-full object-cover flex justify-center"
              src={hero}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default Header
