import React from "react"
import Fade from "react-reveal/Fade"

import Image3 from "../../images/Banner.png"

const AboutHeader = () => {
  return (
    <Fade>
      <div className="max-w-7xl mx-auto mt-10">
        <div className="overflow-hidden rounded-xl max-h-96 m-4">
          <img alt="Image" src={Image3}></img>
        </div>
        <div className="mt-10 px-8">
          <h1 className="font-bold text-xl text-black text-gradient bg-gradient-to-r from-pink to-purple">
            About Meela
          </h1>
          <h2 className="text-black text-6xl font-semibold leading-snug xxs:text-lg xs:text-lg sm:text-3xl lg:text-6xl">
            UI/UX Designer with a refined blend of corporate experience and artistic talent
          </h2>
        </div>
      </div>
    </Fade>
  )
}

export default AboutHeader
