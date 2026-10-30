import { useRef } from "react";
import Layout from "../../components/Layout";
import GalleryFrame from "../../components/GalleryFrame";
import { useIsomorphicLayoutEffect } from "../../utils";
import { stagger } from "../../animations";
import { getLookbooks } from "../../utils/lookbooks";

// The Work page: the same folders as the home page, as large cards with
// their full descriptions, two per row.
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
        <div className="mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
          {lookbooks.map((book) => (
            <GalleryFrame
              key={book.slug}
              name={book.title}
              description={book.description}
              images={
                book.frameImages.length
                  ? book.frameImages
                  : book.gallery.filter((src) => !book.frameHide.includes(src))
              }
              href={`/${book.collection}/${book.slug}/`}
              crop={book.frameCrop}
              pairs={book.framePairs}
              focus={book.frameFocus}
              layout={book.frameLayout}
              ratios={book.frameRatios}
              large
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
