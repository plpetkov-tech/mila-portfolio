import React from "react"
import Fade from "react-reveal/Fade"

const Testimonial = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 mt-14 mb-14">
      <Fade bottom>
        <div className="w-full h-full  flex flex-row justify-between align-middle bg-[url('../images/holographic-backgroundx.webp')] p-12 rounded-lg xxs:flex-col xs:flex-col sm:flex-row xxs:p-5 lg:p-12">
          <div className="w-3/4 xxs:w-full xs:w-full backdrop-blur-sm bg-white/30 p-10 rounded-lg lg:p-10">
            <div className="text-black font-semibold text-xl xxs:text-s xxs:font-normal sm:text-xl font-notoserif">
              "Meela combines exceptional artistic talent with a keen understanding of business requirements. Her designs are not only visually stunning but also highly functional and user-focused. Her ability to translate stakeholder needs into elegant design solutions sets her apart in the field of UI/UX design."
            </div>
            <div className="mt-10">
              <h3 className="text-black text-2xl font-smibold">Digital Marketing Agency</h3>
              <p className="text-black text-sm font-semibold opacity-50">
                Client Feedback
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Testimonial
