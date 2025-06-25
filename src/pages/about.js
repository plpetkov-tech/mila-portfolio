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
        title="About - Meelah | UI UX Designer"
        description="Meelah is a UI/UX Designer with a unique blend of corporate experience and artistic talent."
      ></Seo>
      <AboutHeader></AboutHeader>
      <AboutPage></AboutPage>
    </Layout>
  )
}

export default About
