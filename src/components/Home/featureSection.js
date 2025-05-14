import React from "react"
import Fade from "react-reveal/Fade"

// Assets
import HeroImage from "../../images/holographic-background-1.webp"
import Image1 from "../../images/3D-liquid-abstract-1.webp"
import Image2 from "../../images/3D-liquid-abstract.webp"
import Image3 from "../../images/3D-liquid-abstract-3.webp"

const FeatureSection = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row content-center justify-center align-middle text-center">
          <div className="w-1/3 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-black text-2xl">UI Design</h3>
            <h4 className="mt-10 text-black opacity-70 text-xl">Expert</h4>
          </div>

          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">UX Research</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">Advanced</h4>
          </div>
          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Visual Design</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">Expert</h4>
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
            <h2 className="text-black text-4xl font-semibold">ABOUT ME</h2>
            <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
              Bridging Art & Technology
            </h3>

            <p className="mt-3 text-base text-black-70 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto lg:mr-0">
              With 1.5 years of dedicated UI/UX training and practice, I combine my background in business administration with a lifelong artistic passion to create meaningful digital experiences that solve real user problems.
            </p>

            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-end">
              <div className="rounded-md">
                <a
                  href="/contact"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-black border border-purple hover:bg-transparent md:text-lg md:px-10"
                >
                  Contact Me
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="/gallery"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 border border-purple text-base font-medium rounded-md text-black hover:text-white bg-transparent hover:bg-purple md:py-3 md:text-lg md:px-10"
                >
                  View Portfolio
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
      </div>

      <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row">
          <div className="w-2/6 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-2/6">
            <span className="text-black font-semibold font-montserrat text-4xl">
              DESIGN TOOLKIT
            </span>
            <div className="mt-5">
              <div>
                <p className="text-black text-2xl">Figma</p>
                <p className="text-black opacity-50 text-sm">Wireframes, prototypes, design systems and more</p>
              </div>
              <div className="mt-5">
                <p className="text-black text-2xl">Adobe Creative Suite</p>
                <p className="text-black opacity-50 text-sm">Photoshop, Illustrator, creating original visual elements</p>
              </div>
              <div className="mt-5">
                <p className="text-black text-2xl">UX Research Tools</p>
                <p className="text-black opacity-50 text-sm">
                  User interviews, A/B testing, persona creation, user flows
                </p>
              </div>
            </div>
          </div>

          <div className="w-4/6 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-4/6">
            <h2 className="text-white text-4xl">
              Creating Exceptional User Experiences
            </h2>
            <p className="mt-10 text-white opacity-70">
              My journey as a designer began in early childhood, where I developed a passion for drawing and painting landscapes, flowers, animals, and portraits. This artistic foundation gives me a natural advantage in UI design, particularly in creating original visual elements and understanding color theory and composition. Today, I continue to develop these skills digitally using my Wacom tablet with Adobe Illustrator, bringing the freedom of traditional art to digital design.
            </p>
          </div>
        </div>
      </Fade>

      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold opacity-70">
          DESIGN PHILOSOPHY
        </h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          Consistency, Accessibility, Simplicity
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          My approach to design is centered on three core principles: consistency, accessibility, and simplicity. I believe that consistent design elements build user trust, accessible interfaces ensure inclusivity, and minimalism eliminates confusion while enhancing usability. While I have a personal affinity for Scandinavian minimalism, neumorphic elements, and glassmorphic designs, I prioritize stakeholder requirements and user needs above personal preferences.
        </p>
      </div>

      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold opacity-70">
          CORPORATE EXPERIENCE
        </h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          Business Insight Meets Design
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          My unique professional background includes roles as a Procurement Specialist at IBM, Account Manager at Cisco Software (B2B), Verification Specialist at a payment platform, In-Game Support for mobile gaming, and Customer Support (B2C). This diverse experience has equipped me with exceptional stakeholder communication skills and a deep understanding of business requirements that inform my design decisions. I bring this business acumen to every design project, ensuring that my creative solutions are also practical and aligned with organizational objectives.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md">
            <a
              href="/contact/"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-black border border-purple hover:bg-transparent md:text-lg md:px-10"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold text-gradient bg-gradient-to-r from-pink to-purple">
          Professional Experience
        </h2>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          My professional experience includes creating website banners and social media assets while providing UX consultation for website improvement at a digital marketing agency. I've developed complete user flows, wireframes, and high-fidelity prototypes for an e-commerce platform, including original logo, icons, buttons, cards, and backgrounds. I also created a comprehensive event app with advanced animations and component interactions based on user research and persona development. My corporate background as a Procurement Specialist at IBM, Account Manager at Cisco Software, and various customer support roles has given me valuable insights into business requirements and user needs.
        </p>
      </div>

      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold opacity-70">
          DESIGN STYLES
        </h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          Aesthetic Versatility
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          I specialize in a range of design styles to perfectly match project requirements. My personal affinity for Scandinavian minimalism shows in my clean, functional designs that eliminate clutter and prioritize usability. I'm also skilled in creating neumorphic interfaces that leverage subtle shadows and highlights for a tactile feel, and glassmorphic designs that use transparency and blur effects to create depth and visual hierarchy. While I have my aesthetic preferences, I always prioritize the project requirements and user needs when determining the most appropriate design approach.
        </p>
      </div>

      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold opacity-70">
          ADDITIONAL STRENGTHS
        </h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          Beyond Design Skills
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          My corporate experience has equipped me with valuable skills beyond just design expertise. I'm familiar with agile methodologies and have experience collaborating with cross-functional teams. My analytical approach to identifying and addressing user pain points stems from my diverse professional background. I excel at translating stakeholder requirements into design solutions that balance business goals with user needs. My self-directed study of psychological principles enhances my ability to create intuitive, user-centered experiences that resonate emotionally and functionally with the target audience.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md">
            <a
              href="/contact/"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-black border border-purple hover:bg-transparent md:text-lg md:px-10"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      </div>

      <Fade bottom cascade>
        <div className="grid grid-cols-3 mt-10 gap-4 xxs:grid-cols-1 lg:grid-cols-3 px-5">
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 flex justify-center">
            <img alt="Image" src={Image1}></img>
          </div>
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 flex justify-center">
            <img alt="Image" src={Image2}></img>
          </div>
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 hidden lg:block ">
            <img alt="Image" src={Image3}></img>
          </div>
        </div>
      </Fade>

      <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row content-center justify-center align-middle text-center">
          <div className="w-1/3 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-black text-2xl">UI Design</h3>
            <h4 className="mt-10 text-black  opacity-70 text-xl">Expert</h4>
          </div>

          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">UX Research</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">Advanced</h4>
          </div>
          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Visual Design</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">Expert</h4>
          </div>
          <div className="lg:rounded-xl lg:w-1/3 lg:bg-dp bg-dp p-8 rounded-xl m-5 xxs:w-full xxs:bg-dp xxs:rounded-xl xs:w-full xs:bg-dp xs:rounded-xl sm:hidden md:hidden lg:block">
            <h3 className="text-white text-2xl">Web Fundamentals</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">HTML & CSS</h4>
          </div>
        </div>
      </Fade>

      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold opacity-70">
          ARTISTIC FOUNDATION
        </h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          From Traditional Art to Digital Design
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          My journey as a designer began in early childhood, where I developed a passion for drawing and painting landscapes, flowers, animals, and portraits. This artistic foundation gives me a natural advantage in UI design, particularly in creating original visual elements and understanding color theory and composition. Today, I continue to develop these skills digitally using my Wacom tablet with Adobe Illustrator, bringing the freedom of traditional art to digital design.
        </p>
      </div>

      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold opacity-70">
          TECHNICAL SKILLS
        </h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          Tools & Methodologies
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          I work with industry-standard design tools including Figma, Adobe Photoshop, and Adobe Illustrator, utilizing my Wacom tablet for precision and creative freedom. My knowledge of HTML and CSS fundamentals helps me understand development constraints and possibilities when designing interfaces. I'm skilled in key UX methodologies including user interviews, A/B testing, web-based questionnaires, persona creation, and user flow mapping. My design approach encompasses various styles including minimalistic/Scandinavian, neumorphic, and glassmorphic design techniques.
        </p>
      </div>

      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold opacity-70">
          EDUCATION
        </h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          Academic & Professional Training
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          I hold a Bachelor's Degree in Business Administration which provides me with a solid foundation in understanding business requirements. My technical certifications include Figma Essentials, Figma Advanced, Adobe Photoshop, and Adobe Illustrator. I've also completed specialized training in the Principles of UI & UX Design and HTML & CSS Fundamentals. My interest in psychology has led me to self-directed study of psychological principles that enhance user experience design.
        </p>
      </div>

      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold opacity-70">
          LANGUAGES
        </h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          Multilingual Communication
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          I'm fluent in Bulgarian (native) and English, with proficient knowledge of German and basic Spanish skills. My language abilities enhance my ability to communicate effectively with diverse stakeholders and understand cultural nuances that impact user experience design. This multinational perspective helps me create interfaces that resonate with users from different cultural backgrounds.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md">
            <a
              href="/contact/"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-black border border-purple hover:bg-transparent md:text-lg md:px-10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row content-center justify-center align-middle text-center">
          <div className="w-1/3 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-black text-2xl">Design Systems</h3>
            <h4 className="mt-10 text-black opacity-70 text-xl">Component-Based</h4>
          </div>

          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Interaction Design</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">Micro-animations</h4>
          </div>
          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Problem Solving</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">User-Centered</h4>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default FeatureSection
