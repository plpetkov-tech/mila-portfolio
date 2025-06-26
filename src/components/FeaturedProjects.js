import React from "react"
import Fade from "react-reveal/Fade"

const FeaturedProjects = () => {
  return (
    <Fade duration={2200}>
      <div className="bg-transparent">
        <div className="pt-6 px-6 lg:px-0 mx-auto max-w-screen-xl lg:pt-8  ">
          <h2 className="text-black text-4xl opacity-70 font-semibold pl-4">
            FEATURED PROJECTS
          </h2>
          <h3 className="text-black pl-4 text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
            My Design Work
          </h3>
          <div className="project-hover bg-gradient-to-r from-pink to-purple border mt-10 border-gray-200 rounded-lg p-8 md:p-12 mb-8">
            <h2 className="text-black text-3xl font-simibold mb-2">
              E-Commerce Platform Design
            </h2>
            <p className="text-lg  text-black opacity-60 mb-6">
              This project was created for a handbag e-commerce platform during the completion of my UI Essentials Course led by Daniel Scott. It includes: Complete user flow, Wireframes, and high-fidelity prototypes. I created all design elements including the original brand logo, icons, buttons, cards, and backgrounds. With my passion for Gradients and Minimalism, I carefully selected the typography and a soft color palette in order to create an elegant shopping experience.
            </p>
            <a
              href="/projects/bags-app/"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-black hover:text-white rounded-lg border border-purple  hover:bg-purple"
            >
              View Project
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
          <div className="grid md:grid-cols-2 gap-8">
            <div className="project-hover bg-gradient-to-r from-pink to-purple border border-gray-200 rounded-lg p-8 md:p-12">
              <h2 className="text-black text-3xl font-simibold mb-2">
                Event Application Design
              </h2>
              <p className="text-lg  text-black opacity-60 mb-6">
                Designed the UI for an Event App for the completion of the Figma Advanced Course. The Event App contains complex interactive cards with advanced Auto-Layout features with info about each concert, along with animations and an easy way for buying tickets online. As the Event will take part at the beachside of Obzor and it's about RnB music, I got inspiration for my color palette and the unique logo and effects by the nostalgic 2000s and '90s vibes.  
              </p>
              <a
                href="/projects/event-app/"
                className="transition-all duration-500ms ease-in-out hover:ease-in-out inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-black hover:text-white  rounded-lg border border-purple  hover:bg-purple"
              >
                View Project
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
            <div className="project-hover bg-gradient-to-r from-pink to-purple border border-gray-200 rounded-lg p-8 md:p-12">
              <h2 className="text-black text-3xl font-simibold mb-2">
                Whiskey Bottle Design Competition
              </h2>
              <p className="text-lg  text-black opacity-60 mb-6">
                I took part in a designer competition for the design of the summer edition package of a famous Whiskey. The Theme for the design was a summer holiday. My illustration made in Adobe Illustrator contains a beautiful sunset scene where the sea, the sky and the sunshines blend into the horizon and the viewer is being taken into his memories or imagination of relax, freedom and peace by the sea. I am currently awaiting results. 
              </p>
              <a
                href="/arts/jw/"
                className="transition-all duration-500ms ease-in-out hover:ease-in-out inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-black hover:text-white  rounded-lg border border-purple  hover:bg-purple"
              >
                View Project
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
      </div>
    </Fade>
  )
}

export default FeaturedProjects
