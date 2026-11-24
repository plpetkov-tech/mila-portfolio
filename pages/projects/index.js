import { useRef } from "react";
import Layout from "../../components/Layout";
import Link from "next/link";
import FolderGallery from "../../components/FolderGallery";
import { useIsomorphicLayoutEffect } from "../../utils";
import { stagger } from "../../animations";
import { getLookbooks } from "../../utils/lookbooks";

// The Work page: the same folders as the home page, each one opened up so all of its work shows right away, one folder under the other.
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
        {/* Every folder opened up: its name, then everything inside it */}
        <div className="mt-10 flex flex-col gap-24 max-w-5xl mx-auto">
          {lookbooks.map((book) => (
            <section key={book.slug}>
              <Link
                href={`/${book.collection}/${book.slug}/`}
                className="block p-2 laptop:p-0 link"
              >
                <h2 className="text-3xl laptop:text-5xl">{book.title}</h2>
                <p className="mt-3 font-body text-xl opacity-50">
                  {book.description}
                </p>
              </Link>
              <FolderGallery entry={book} items={book.children} />
            </section>
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
