import * as React from "react"
import Layout from "../components/layout"

// Components
import Header from "../components/Home/header"
import FeatureSection from "../components/Home/featureSection"
import Testimonial from "../components/Home/testimonial"
import FeaturedProjects from "../components/FeaturedProjects"
import Seo from "../components/seo"

const IndexPage = () => (
  <div className="h-auto w-screen">
    <Layout>
      <Seo
        title="Home - Meela | UI UX Designer"
        description="Meela is a UI UX Designer based in Bulgaria. Her portfolio features Figma designs, fine arts and graphic design deliveries"
      ></Seo>
      <Header></Header>
      <FeatureSection></FeatureSection>
      <FeaturedProjects></FeaturedProjects>
      <Testimonial></Testimonial>
    </Layout>
  </div>
)

export default IndexPage
