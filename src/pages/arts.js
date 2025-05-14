import React from "react"
import ProjectsHeader from "../components/Blog/projectsHeader"
import ProjectsContainer from "../components/Blog/projectsContainer"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"

const Arts = ({ data }) => {
  let HeaderPost = data?.allMarkdownRemark?.edges[0]
  let otherPosts = data?.allMarkdownRemark?.edges.slice(1)

  return (
    <Layout>
      <Seo
        title="Meelah's Portfolio - Arts"
        description="Meelah's Portfolio is a visually striking and highly customizable portfolio website built on the powerful Gatsby framework and integrated with the versatile Decap CMS"
      ></Seo>
      <ProjectsHeader post={HeaderPost} />
      <ProjectsContainer data={otherPosts} />
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