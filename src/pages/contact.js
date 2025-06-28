import React from "react"
import Layout from "../components/layout"
import Input from "../components/Atoms/input"
import Button from "../components/Atoms/button"
import Fade from "react-reveal/Fade"
import Seo from "../components/seo"

import image from "../images/holographic-background.webp"

const Contact = () => {
  return (
    <Layout>
      <Seo
        title="Contact - Meela | UI UX Designer"
        description="Meela is a UI/UX Designer with a refined blend of corporate experience and artistic talent"
      ></Seo>

      <div className="max-w-7xl mx-auto mt-10 flex text-white xxs:flex-col sm:flex-row">
        <Fade duration={1200}>
          <div className="bg-dp opacity-70 p-10 rounded-xl w-3/4 m-5 w-auto">
            <h1 className="text-3xl text-white">CONTACT MEELA</h1>
            <h2 className="text-4xl font-bold mt-2 xxs:text-lg sm:text-2xl lg:text-4xl text-gradient bg-gradient-to-r from-pink to-purple">
              Let's Create Exceptional Experiences Together
            </h2>
            <p className="text-lg mt-2 opacity-70 w-3/4 xxs:text-xs xxs:w-full sm:text-sm sm:w-3/4">
              Have a project in mind, need design consultation, or just want to say hello?<br />
              Fill out the form below and I'll get back to you as soon as possible.<br />
              I'm always excited to collaborate on new ideas and help bring your vision to life!
            </p>

            <form 
              className="mt-5" 
              name="contact" 
              method="POST" 
              data-netlify="true"
              action="/success"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              <div className="flex xxs:flex-col sm:flex-row">
                <div className="sm:mr-5 xxs:mr-0">
                  <label>
                    <Input
                      placeholder="Your Name"
                      type="text"
                      name="name"
                      className="bg-bg bg-opacity-20 text-white placeholder-white placeholder-opacity-70"
                    ></Input>
                  </label>
                </div>
                <div className="sm:ml-5 xxs:ml-0 xxs:mt-2 sm:mt-0">
                  <label>
                    <Input
                      placeholder="Your Email"
                      type="email"
                      name="email"
                      className="bg-bg bg-opacity-20 text-white placeholder-white placeholder-opacity-70"
                    ></Input>
                  </label>
                </div>
              </div>

              <div className="flex mt-5 xxs:flex-col sm:flex-row">
                <div className="sm:mr-5 xxs:mr-0">
                  <label>
                    <Input
                      placeholder="Your Company"
                      type="text"
                      name="company"
                      className="bg-bg bg-opacity-20 text-white placeholder-white placeholder-opacity-70"
                    ></Input>
                  </label>
                </div>
                <div className="sm:ml-5 xxs:ml-0 xxs:mt-2 sm:mt-0">
                  <label>
                    <Input
                      placeholder="Your Phone"
                      type="tel"
                      name="phone"
                      className="bg-bg bg-opacity-20 text-white placeholder-white placeholder-opacity-70"
                    ></Input>
                  </label>
                </div>
              </div>
              <label>
                <textarea
                  className="mt-5 w-full bg-dp rounded-xl p-5 outline-none ring-2 ring-purple border-transparent text-white placeholder-white placeholder-opacity-70"
                  rows="5"
                  placeholder="Tell me about your project needs"
                  name="message"
                ></textarea>
              </label>
              <div>
                <label>
                  <Button
                    type="submit"
                    title="Send Message"
                    colorClass="bg-gradient-to-r from-pink to-purple font-montserrat"
                    marginClass="mt-5"
                  ></Button>
                </label>
              </div>
            </form>
          </div>
        </Fade>
        <Fade bottom cascade>
          <div className="w-1/4 overflow-hidden rounded-xl m-5 xxs:hidden sm:block">
            <img
              className="object-cover h-full w-full"
              src={image}
              alt="HeroImage"
            ></img>
          </div>
        </Fade>
      </div>
    </Layout>
  )
}

export default Contact
