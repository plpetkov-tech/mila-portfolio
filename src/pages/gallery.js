import React from "react"
import Gallery from "../components/gallery-page"
import Layout from "../components/layout"
import Seo from "../components/seo"

const GalleryPage = () => {
  return (
    <Layout>
      <Seo
        title="Gallery - Mila | UI UX Designer"
        description="Mila's Portfolio is a visually striking and highly customizable portfolio website built on the powerful Gatsby framework and integrated with the versatile Decap CMS"
      ></Seo>
      <Gallery></Gallery>
    </Layout>
  )
}

export default GalleryPage
