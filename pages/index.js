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
import { getStandaloneEntries } from "../utils/api";
import { getLookbooks } from "../utils/lookbooks";

// Each card sees the same palette gradient from its own angle
const ANGLES = [90, 270, 180, 0, 135, 315];

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
            className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full"
          >
            {data.headerTaglineOne}{" "}
            <img
              src="/images/mila-avatar.png"
              alt=""
              aria-hidden="true"
              className="inline-block h-[1.15em] w-auto align-[-0.18em]"
            />
          </h1>
          <h1
            ref={textTwo}
            className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full text-gradient"
          >
            {data.headerTaglineTwo}
          </h1>
          <h1
            ref={textThree}
            className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full"
          >
            {data.headerTaglineThree}
          </h1>
          <h1
            ref={textFour}
            className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full"
          >
            {data.headerTaglineFour}
          </h1>
        </div>

        <Socials className="mt-2 laptop:mt-5" />
      </div>

      <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
        <h1 className="text-2xl text-bold">Work.</h1>

        <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
          {lookbooks.map((book, i) => (
            <div
              key={book.slug}
              // A single frame gets the full row; otherwise all frames match
              className={lookbooks.length === 1 ? "tablet:col-span-2" : ""}
            >
              <GalleryFrame
                angle={ANGLES[i % ANGLES.length]}
                name={book.title}
                description={book.description}
                images={
                  book.frameImages.length
                    ? book.frameImages
                    : book.gallery.filter(
                        (src) => !book.frameHide.includes(src),
                      )
                }
                layout={book.frameLayout}
                ratios={book.frameRatios}
                crop={book.frameCrop}
                pairs={book.framePairs}
                focus={book.frameFocus}
                fit={book.frameFit}
                overlap={book.frameOverlap}
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
        <Button
          type="primary"
          href="/projects/"
          classes="mt-10 laptop:mt-14 mb-6"
        >
          See all work &amp; art →
        </Button>
      </div>

      <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
        <h1 className="tablet:m-10 text-3xl text-bold">Services.</h1>
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

      {/* Lined up with the Work cards: same edges, same title/body fonts */}
      <div className="relative mt-10 laptop:mt-40 p-2 laptop:p-4 pb-16 laptop:pb-24">
        <h1 className="text-3xl">About.</h1>
        <div className="relative mt-5">
          <p className="relative font-body text-xl opacity-50 w-full">
            {data.aboutpara}
          </p>
          {/* A soft wash of light in the palette colors, behind the text */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -z-10 left-[3%] right-[3%] -top-6 -bottom-8 rounded-[50%] bg-gradient-to-r from-[#f5cd91] via-[#ec9594] to-[#f5cd91] opacity-[0.12] dark:opacity-[0.08] blur-3xl"
          />
        </div>
        <Link
          href="/about/"
          className="inline-block mt-8 font-body text-base underline opacity-70 hover:opacity-100 link"
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
      // Case studies that aren't inside a folder still get their own card
      projects: getStandaloneEntries("projects"),
      // Folders get a frame on the home page (same list as the Work page)
      lookbooks: await getLookbooks(),
    },
  };
}
