import React from "react"
import ProjectsContainerFull from "../components/Blog/projectsContainerFull"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"

const Projects = ({ data }) => {
  let allPosts = data?.allMarkdownRemark?.edges

  return (
    <Layout>
      <Seo
        title="Meela's Portfolio - Projects"
        description="Meela is a UI/UX Designer with a refined blend of corporate experience and artistic talent"
      ></Seo>
      <ProjectsContainerFull data={allPosts} />
    </Layout>
  )
}

export default Projects

export const WorkPageQuery = graphql`
  query ProjectsPage {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/src/projects/" }
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
