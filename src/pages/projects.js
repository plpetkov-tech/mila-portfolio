import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import Fade from "react-reveal/Fade"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Projects = ({ data }) => {
  let projectPosts = data?.projects?.edges
  let artsPosts = data?.arts?.edges

  // Group items by category - unified function for both projects and arts
  const groupByCategory = (items) => {
    const grouped = {}
    items.forEach(item => {
      const category = item.node.frontmatter.categories?.[0] || "Uncategorized"
      if (!grouped[category]) {
        grouped[category] = []
      }
      grouped[category].push({
        featuredimage: item.node.frontmatter.featuredimage,
        title: item.node.frontmatter.title,
        description: item.node.frontmatter.description,
        slug: item.node.fields.slug,
      })
    })
    return grouped
  }

  const groupedProjects = groupByCategory(projectPosts)
  const groupedArts = groupByCategory(artsPosts)

  // Define custom order for project categories
  const projectCategoryOrder = [
    "UI/UX",
    "UI/UX Projects - Complete App Flows & Prototypes",
  ]

  // Define custom order for arts categories
  const artsCategoryOrder = [
    "Commercial Works",
    "Logos & Icons",
    "Graphic Illustrations", 
    "Fine Arts",
  ]

  // Sort categories by custom order, fallback to alphabetical
  const sortCategories = (grouped, categoryOrder) => {
    return Object.entries(grouped).sort(([a], [b]) => {
      const aIndex = categoryOrder.indexOf(a)
      const bIndex = categoryOrder.indexOf(b)
      
      if (aIndex !== -1 && bIndex !== -1) {
        return aIndex - bIndex
      } else if (aIndex !== -1) {
        return -1
      } else if (bIndex !== -1) {
        return 1
      } else {
        return a.localeCompare(b)
      }
    })
  }

  const sortedProjectEntries = sortCategories(groupedProjects, projectCategoryOrder)
  const sortedArtsEntries = sortCategories(groupedArts, artsCategoryOrder)

  return (
    <Layout>
      <Seo
        title="Meela's Portfolio - Projects"
        description="Meela is a UI/UX Designer with a refined blend of corporate experience and artistic talent"
      ></Seo>
      
      {/* Projects Section */}
      <div className="max-w-7xl mx-auto mt-16 px-8 text-black">
        {sortedProjectEntries.map(([category, projects]) => (
          <div key={category} className="mb-12">
            {/* Category Header */}
            <Fade bottom>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-center mb-2">{category}</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-pink to-purple mx-auto rounded-full"></div>
              </div>
            </Fade>
            
            {/* Projects Grid */}
            <Fade bottom cascade>
              <div className="grid grid-cols-2 gap-6 xxs:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 mb-8">
                {projects.map((project, i) => (
                  <div key={i}>
                    <div className="overflow-hidden rounded-xl xxs:w-full">
                      <Link
                        to={project.slug}
                        style={{
                          textDecoration: "none",
                          color: "black",
                        }}
                      >
                        <GatsbyImage
                          image={getImage(project.featuredimage)}
                          alt={project.title}
                          placeholder="none"
                          layout="cover"
                          formats={["auto", "webp", "avif"]}
                          quality={100}
                          className="img"
                        />
                      </Link>
                    </div>
                    <div className="m-6">
                      <Link
                        to={project.slug}
                        style={{
                          textDecoration: "none",
                          color: "black",
                        }}
                      >
                        <h1 className="text-2xl font-simibold mt-2 mb-4">
                          {project.title}
                        </h1>
                      </Link>
                      <p className="text-sm opacity-50 mt-2">{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Fade>
          </div>
        ))}
      </div>
      
      {/* Arts Section */}
      <div className="max-w-7xl mx-auto mt-16 px-8 text-black">
        {sortedArtsEntries.map(([category, arts]) => (
          <div key={category} className="mb-12">
            {/* Category Header */}
            <Fade bottom>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-center mb-2">{category}</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-pink to-purple mx-auto rounded-full"></div>
              </div>
            </Fade>
            
            {/* Arts Grid */}
            <Fade bottom cascade>
              <div className="grid grid-cols-3 gap-4 xxs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-8">
                {arts.map((art, i) => (
                  <div key={i}>
                    <div className="overflow-hidden rounded-xl xxs:w-full">
                      <Link
                        to={art.slug}
                        style={{
                          textDecoration: "none",
                          color: "black",
                        }}
                      >
                        <GatsbyImage
                          image={getImage(art.featuredimage)}
                          alt={art.title}
                          placeholder="none"
                          layout="cover"
                          formats={["auto", "webp", "avif"]}
                          quality={100}
                          className="img"
                        />
                      </Link>
                    </div>
                    <div className="m-6">
                      <Link
                        to={art.slug}
                        style={{
                          textDecoration: "none",
                          color: "black",
                        }}
                      >
                        <h1 className="text-2xl font-simibold mt-2 mb-4">
                          {art.title}
                        </h1>
                      </Link>
                      <p className="text-sm opacity-50 mt-2">{art.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Fade>
          </div>
        ))}
        
        {/* Call to Action */}
        <div className="w-auto p-8 m-4 h-72 sm:h-96 xs:h-96 xxs:h-96 mt-10 bg-gradient-to-r from-pink to-purple rounded-xl flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-black text-center">
            LET'S CREATE TOGETHER
          </h2>
          <h3 className="text-lg mt-2 opacity-60 text-black text-center">
            Like what you see? Interested in collaborating or have a project in mind?
            <br />
            Reach out and let's make something great!
          </h3>
          <div className="mt-10 flex flex-col items-center justify-center">
            <a
              href="/contact"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-black hover:text-white rounded-lg border border-purple hover:bg-purple"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Projects

export const WorkPageQuery = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
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
            categories
            featuredimage {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
    arts: allMarkdownRemark(
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
            categories
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
