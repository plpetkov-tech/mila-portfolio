import React from "react"
import ArtsContainer from "../components/Blog/artsContainer"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"

const Arts = ({ data }) => {
  let allPosts = data?.allMarkdownRemark?.edges

  return (
    <Layout>
      <Seo
        title="Meelah's Portfolio - Arts"
        description="Meelah's Portfolio is a visually striking and highly customizable portfolio website built on the powerful Gatsby framework and integrated with the versatile Decap CMS"
      ></Seo>
      <ArtsContainer data={allPosts} />
    </Layout>
  )
}

export default Arts

export const ArtsPageQuery = graphql`
  query ArtsPage {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/src/arts/" }
        frontmatter: { templateKey: { eq: "blog-post" } }
      }
      sort: { frontmatter: { date: DESC } }
      limit: 30
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD:MM:YYYY hh:mm a")
            title
            description
            featuredimage {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
` 