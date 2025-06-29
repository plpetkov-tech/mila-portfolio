import React from "react"
import Fade from "react-reveal/Fade"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const ProjectsContainerFull = ({ data }) => {
  let posts = data?.map(item => {
    return {
      featuredimage: item.node.frontmatter.featuredimage,
      title: item.node.frontmatter.title,
      description: item.node.frontmatter.description,
      slug: item.node.fields.slug,
    }
  })

  return (
    <div className="max-w-7xl xxs:mx-4 sm:mx-auto mt-10">
      {posts.map((project, i) => (
        <Fade duration={2200} key={i}>
          <div className="flex flex-row justify-space xxs:flex-col-reverse xs:flex-col-reverse sm:flex-row mb-5">
            <div className="max-h-80 w-11/12 xxs:ml-0 xxs:mr-0 sm:ml-5 sm:mr-5 xxs:mt-5 xxs:mb-5 flex flex-col justify-center bg-gradient-to-r from-pink to-purple p-8 rounded-xl lg:m-5 xxs:w-full xs:w-full sm:w-full lg:w-full">
              <Link
                to={project.slug}
                style={{
                  textDecoration: "none",
                }}
              >
                <h1 className="text-white text-2xl font-simibold">
                  {project.title}
                </h1>
              </Link>
              <p className="text-lg mt-4 text-white opacity-70 xxs:text-sm sm:text-lg">
                {project.description}
              </p>
            </div>
            <div
              data-gatsby-image-wrapper=""
              className="my-5 mr-5 xxs:w-full xs:w-full sm:w-full lg:w-full"
            >
              <div className="overflow-hidden  rounded-xl xxs:w-full">
                {project.featuredimage && (
                  <Link
                    to={project.slug}
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    <div className="max-h-80 w-auto h-full object-cover flex justify-center">
                      <GatsbyImage
                        image={getImage(project.featuredimage)}
                        alt={project.title}
                        placeholder="none"
                        backgroundColor="none"
                        layout="fulWidth"
                        formats={["auto", "webp", "avif"]}
                        quality={100}
                        className="img"
                      />
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Fade>
      ))}
    </div>
  )
}

export default ProjectsContainerFull