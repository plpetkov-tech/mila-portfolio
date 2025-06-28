import React from "react"
import AboutPage from "../components/about/aboutPage"

import AboutGrid from "../components/about/aboutGrid"
import Seo from "../components/seo"

import Layout from "../components/layout"
import AboutHeader from "../components/about/aboutHeader"

const About = () => {
  return (
    <Layout>
      <Seo
        title="About - Meela | UI UX Designer"
        description="Meela is a UI/UX Designer with a refined blend of corporate experience and artistic talent."
      ></Seo>
      <AboutHeader></AboutHeader>
      <AboutPage></AboutPage>
    </Layout>
  )
}

export default About
