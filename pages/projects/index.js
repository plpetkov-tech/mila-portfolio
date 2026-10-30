import { useRef } from "react";
import Layout from "../../components/Layout";
import WorkCard from "../../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../../utils";
import { stagger } from "../../animations";
import { getAllEntries, groupByCategory, isFolder } from "../../utils/api";
import data from "../../data/portfolio.json";

const FIRST_SECTION = "Commercial Works";

const Section = ({ group, collection, columns }) => (
  <div className="mt-16">
    <h2 className="text-2xl tablet:text-4xl text-bold p-2 laptop:p-0">
      {group.category}
    </h2>
    <div className="w-24 h-1 mt-2 bg-gradient-to-r from-pink to-purple rounded-full mx-2 laptop:mx-0"></div>
    <div
      className={`mt-5 grid grid-cols-1 tablet:grid-cols-2 ${columns} gap-4`}
    >
      {group.items.map((entry) => (
        <WorkCard
          key={entry.slug}
          img={entry.image}
          name={entry.title}
          description={entry.description}
          href={`/${collection}/${entry.slug}/`}
          tall={collection === "projects"}
        />
      ))}
    </div>
  </div>
);

const Projects = ({ projects, arts }) => {
  const text = useRef();

  useIsomorphicLayoutEffect(() => {
    stagger(
      [text.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" },
    );
  }, []);

  return (
    <Layout
      title="Work"
      description="UI/UX case studies, illustrations, logos and fine arts by Mila."
    >
      <div className="mt-10">
        <h1
          ref={text}
          className="mx-auto mob:p-2 text-bold text-6xl laptop:text-8xl w-full"
        >
          Work.
        </h1>
        {/* Commercial Works leads, then the UI/UX case studies, then the rest */}
        {arts
          .filter((group) => group.category === FIRST_SECTION)
          .map((group) => (
            <Section
              key={group.category}
              group={group}
              collection="arts"
              columns="laptop:grid-cols-3"
            />
          ))}
        {projects.map((group) => (
          <Section
            key={group.category}
            group={group}
            collection="projects"
            columns=""
          />
        ))}
        {arts
          .filter((group) => group.category !== FIRST_SECTION)
          .map((group) => (
            <Section
              key={group.category}
              group={group}
              collection="arts"
              columns="laptop:grid-cols-3"
            />
          ))}
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      projects: groupByCategory(
        // The Work page keeps listing each case study on its own
        getAllEntries("projects").filter((entry) => !isFolder(entry)),
        data.projectCategoryOrder,
      ),
      arts: groupByCategory(getAllEntries("arts"), data.artsCategoryOrder),
    },
  };
}

export default Projects;
