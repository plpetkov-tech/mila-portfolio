import React from "react"
import Input from "../Atoms/input"
import Button from "../Atoms/button"
import Fade from "react-reveal/Fade"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const ProjectsContainer = ({ data }) => {
  let posts = data?.map(item => {
    return {
      featuredimage: item.node.frontmatter.featuredimage,
      title: item.node.frontmatter.title,
      description: item.node.frontmatter.description,
      slug: item.node.fields.slug,
    }
  })
  console.log("Data ", data)
  console.log("post", posts)
  // const image = getImage(post.node.frontmatter.featuredimage)

  return (
    <div className="max-w-7xl mx-auto mt-10 px-8 text-black">
      <Fade bottom cascade>
        <div className="grid grid-cols-3 gap-4 xxs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((project, i) => (
            <div key={i}>
              <div className="overflow-hidden  rounded-xl xxs:w-full ">
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
                    // aspectRatio={16 / 9}
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
  )
}

export default ProjectsContainer
