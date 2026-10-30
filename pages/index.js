import { useRef } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import GalleryFrame from "../components/GalleryFrame";
import Button from "../components/Button";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import { getAllEntries } from "../utils/api";

// Local Data
import data from "../data/portfolio.json";

export default function Home({ projects, lookbooks }) {
  // Ref
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" },
    );
  }, []);

  return (
    <Layout>
      <div className="laptop:mt-20 mt-10">
        <div className="mt-5">
          <h1
            ref={textOne}
            className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
          >
            {data.headerTaglineOne}
          </h1>
          <h1
            ref={textTwo}
            className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5 text-gradient"
          >
            {data.headerTaglineTwo}
          </h1>
          <h1
            ref={textThree}
            className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
          >
            {data.headerTaglineThree}
          </h1>
          <h1
            ref={textFour}
            className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
          >
            {data.headerTaglineFour}
          </h1>
        </div>

        <Socials className="mt-2 laptop:mt-5" />
      </div>

      <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
        <h1 className="text-2xl text-bold">Work.</h1>

        <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
          {lookbooks.map((book) => (
            <div
              key={book.slug}
              className={lookbooks.length === 1 ? "tablet:col-span-2" : ""}
            >
              <GalleryFrame
                name={book.title}
                description={book.description}
                images={book.gallery}
                href={`/${book.collection}/${book.slug}/`}
              />
            </div>
          ))}
          {projects.map((project) => (
            <WorkCard
              key={project.slug}
              img={project.image}
              name={project.title}
              description={project.description}
              href={`/${project.collection}/${project.slug}/`}
            />
          ))}
        </div>
        <Button type="primary" href="/projects/" classes="mt-5">
          See all work &amp; art →
        </Button>
      </div>

      <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
        <h1 className="tablet:m-10 text-2xl text-bold">Services.</h1>
        <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
          {data.services.map((service) => (
            <ServiceCard
              key={service.id}
              name={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>

      <div className="mt-10 laptop:mt-40 p-2 laptop:p-0">
        <h1 className="tablet:m-10 text-2xl text-bold">About.</h1>
        <p className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5">
          {data.aboutpara}
        </p>
        <Link
          href="/about/"
          className="tablet:mx-10 inline-block mt-2 underline opacity-70 hover:opacity-100 link"
        >
          More about me →
        </Link>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      projects: getAllEntries("projects"),
      // Folders with a lookbook gallery get a scrollable frame on the home page
      lookbooks: getAllEntries("arts").filter((entry) => entry.gallery.length),
    },
  };
}
