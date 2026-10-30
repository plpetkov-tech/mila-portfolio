import { useRef } from "react";
import Layout from "../../components/Layout";
import WorkFolder from "../../components/WorkFolder";
import { useIsomorphicLayoutEffect } from "../../utils";
import { stagger } from "../../animations";
import { getLookbooks } from "../../utils/lookbooks";

// The Work page: the same folders as the home page, one per row, each with a
// few full shots of its projects and the full description.
const Projects = ({ lookbooks }) => {
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
      description="Seasonal campaigns, cinematic product videos, print and outdoor, packaging, mobile app UI and illustrations by Mila."
    >
      <div className="mt-10">
        <h1
          ref={text}
          className="mx-auto mob:p-2 text-bold text-6xl laptop:text-8xl w-full"
        >
          Work.
        </h1>
        <div className="mt-10 flex flex-col gap-10">
          {lookbooks.map((book) => (
            <WorkFolder
              key={book.slug}
              name={book.title}
              description={book.description}
              images={book.workImages}
              ratios={book.workRatios}
              href={`/${book.collection}/${book.slug}/`}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  return { props: { lookbooks: await getLookbooks() } };
}

export default Projects;
