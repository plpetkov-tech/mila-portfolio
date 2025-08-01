import React from "react"
import Fade from "react-reveal/Fade"

// Assets
import HeroImage from "../../images/holographic-background-1.webp"
import Image1 from "../../images/Group-4.png"
import Image2 from "../../images/Group-5.png"
import Image3 from "../../images/Group-12.png"

const FeatureSection = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row content-center justify-center align-middle text-center">
          <div className="w-1/3 bg-box4 p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-black text-2xl">UI Design</h3>
            <h4 className="mt-10 text-black opacity-70 text-xl">Detail Perfectionist</h4>
          </div>

          <div className="w-1/3 bg-box3 p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-black text-2xl">UX Research</h3>
            <h4 className="mt-10 text-black opacity-70 text-xl">Empathy Engineer</h4>
          </div>
          <div className="w-1/3 bg-box2 p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-black text-2xl">Visual Design</h3>
            <h4 className="mt-10 text-black opacity-70 text-xl">Color Optimizer</h4>
          </div>
          <div className="lg:rounded-xl lg:w-1/3 lg:bg-dp bg-dp p-8 rounded-xl m-5 xxs:w-full xxs:bg-dp xxs:rounded-xl xs:w-full xs:bg-dp xs:rounded-xl sm:hidden md:hidden lg:block">
            <h3 className="text-white text-2xl">Web Fundamentals</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">HTML & CSS</h4>
          </div>
        </div>
      </Fade>

      <div className="max-w-7xl mx-auto lg:px-8 md:px-3">
        <div className="mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 md:mt-10 lg:mt-10 lg:px-0 xl:mt-10 flex flex-col lg:flex-row gap-3 lg:flex-justify">
          <div className="lg:w-1/2 my-4">
            <img
              className="rounded-xl h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={HeroImage}
              alt="HeroImage"
            ></img>
          </div>

          <div className="lg:w-1/2 sm:text-center lg:text-right flex flex-col justify-center">
            <h2 className="text-black text-4xl font-semibold opacity-70">MY APPROACH</h2>
            <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
              Bridging Art & Technology
            </h3>
            <p className="mt-3 text-base text-black-70 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto lg:mr-0">
              My way for achieving aestatically pleasing and functional user design is combining my natural talent and passion for Fine Arts, the technical skills for using design software precisely and the soft skills that I have gained through my corporate experience. The way for gaining customer trust is to keep the designs consistent, clear and simple. 
Evoking positive emotions in users by a beautiful user-centred design is the ultimate goal of my efforts.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-end">
              <div className="rounded-md">
                <a
                  href="/about"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-black border border-purple hover:bg-transparent md:text-lg md:px-10"
                >
                  Learn more about me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold opacity-70">
          DESIGN PHILOSOPHY
        </h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          Consistency, Accessibility, Simplicity
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          I believe that when designs look and work the same, people trust them more. Accessible designs include everyone, and simple layouts not only help people understand things quickly but are also clean and beautiful. Less is more!
        </p>
      </div>

      <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row">
          <div className="w-2/6 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-2/6">
            <span className="text-black font-semibold font-montserrat text-4xl">
              PORTFOLIO HIGHLIGHTS
            </span>
            <div className="mt-5">
              <div>
                <p className="text-black text-2xl">E-Commerce Platform</p>
                <p className="text-black opacity-50 text-sm">Complete user flow, wireframes, and prototypes</p>
              </div>
              <div className="mt-5">
                <p className="text-black text-2xl">Event Application</p>
                <p className="text-black opacity-50 text-sm">Advanced animations and component interactions</p>
              </div>
              <div className="mt-5">
                <p className="text-black text-2xl">Digital Marketing</p>
                <p className="text-black opacity-50 text-sm">Website UX consultation and visual assets</p>
              </div>
            </div>
          </div>

          <div className="w-4/6 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-4/6">
            <h2 className="text-white text-4xl">
              Technical Toolkit
            </h2>
            <p className="mt-5 text-white opacity-70">
              <span className="block mb-3 text-xl">Design Tools:</span> 
              Figma, Adobe Photoshop, Adobe Illustrator, Wacom drawing
            </p>
            <p className="mt-2 text-white opacity-70">
              <span className="block mb-3 text-xl">Design Approaches:</span>
              User interviews, A/B testing, persona creation, user flow mapping
            </p>
            <p className="mt-2 text-white opacity-70">
              <span className="block mb-3 text-xl">Design Styles:</span>
              Minimalistic, neumorphic, and glassmorphic
            </p>
          </div>
        </div>
      </Fade>

      {/* <Fade bottom cascade>
        <div className="grid grid-cols-1 mt-10 gap-4 lg:grid-cols-3">
          <div className="rounded-xl overflow-hidden relative hover:opacity-90 transition-opacity">
            <img 
              alt="Image" 
              src={Image1}
              className="w-full h-64 object-contain bg-transparent"
            />
          </div>
          <div className="rounded-xl overflow-hidden relative hover:opacity-90 transition-opacity">
            <img 
              alt="Image" 
              src={Image2}
              className="w-full h-64 object-contain bg-transparent"
            />
          </div>
          <div className="rounded-xl overflow-hidden relative hover:opacity-90 transition-opacity">
            <img 
              alt="Image" 
              src={Image3}
              className="w-full h-64 object-contain bg-transparent"
            />
          </div>
        </div>
      </Fade> */}

      <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row content-center justify-center align-middle text-center">
          <div className="w-1/3 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-black text-2xl">Design Systems</h3>
            <h4 className="mt-10 text-black opacity-70 text-xl">Component-Based</h4>
          </div>

          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Wireframing</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">Low to High Fidelity</h4>
          </div>

          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Prototyping</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">Interactive</h4>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default FeatureSection
