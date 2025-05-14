import React from "react"
import ProjectsHeader from "../components/Blog/projectsHeader"
import ProjectsContainer from "../components/Blog/projectsContainer"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"

const Projects = ({ data }) => {
  console.log("data", data)
  let HeaderPost = data?.allMarkdownRemark?.edges[0]
  let otherPosts = data?.allMarkdownRemark?.edges.slice(1)

  return (
    <Layout>
      <Seo
        title="Mila's Portfolio - Projects"
        description="Mila's Portfolio is a visually striking and highly customizable portfolio website built on the powerful Gatsby framework and integrated with the versatile Decap CMS"
      ></Seo>
      <ProjectsHeader post={HeaderPost} />
      <ProjectsContainer data={otherPosts} />
    </Layout>
  )
}

export default Projects

export const WorkPageQuery = graphql`
  query IndexPage {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      limit: 30
      sort: { frontmatter: { date: DESC } }
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
