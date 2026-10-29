import React, { useRef } from "react";
import Link from "next/link";
import Layout from "../Layout";
import ContentSection from "../ContentSection";
import { useIsomorphicLayoutEffect } from "../../utils";
import { stagger } from "../../animations";

const truncate = (text, max = 30) =>
  text.length > max ? text.slice(0, max) + "..." : text;

const EntryPage = ({ entry, previous, next }) => {
  const textOne = useRef();
  const textTwo = useRef();

  useIsomorphicLayoutEffect(() => {
    stagger([textOne.current, textTwo.current], { y: 30 }, { y: 0 });
  }, []);

  return (
    <Layout title={entry.title} description={entry.description} image={entry.image}>
      <article className="mt-10 flex flex-col max-w-5xl mx-auto">
        <h1
          ref={textOne}
          className="text-4xl mob:text-2xl laptop:text-6xl text-bold p-2 laptop:p-0"
        >
          {entry.title}
        </h1>
        <h2
          ref={textTwo}
          className="mt-2 text-xl max-w-4xl opacity-50 p-2 laptop:p-0"
        >
          {entry.category}
        </h2>
        {entry.image && (
          <img
            className="mt-10 w-full h-auto rounded-lg shadow-lg"
            src={entry.image}
            alt={entry.title}
          ></img>
        )}
        {entry.description && (
          <p className="mt-10 text-xl laptop:text-2xl opacity-80 p-2 laptop:p-0">
            {entry.description}
          </p>
        )}
        <ContentSection html={entry.html} />

        <nav className="flex items-center justify-between pt-8 p-2 laptop:p-0">
          {previous ? (
            <Link
              href={`/${entry.collection}/${previous.slug}/`}
              className="flex items-center gap-2 opacity-70 hover:opacity-100 link"
            >
              ← {truncate(previous.title)}
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              href={`/${entry.collection}/${next.slug}/`}
              className="flex items-center gap-2 opacity-70 hover:opacity-100 link"
            >
              {truncate(next.title)} →
            </Link>
          )}
        </nav>
      </article>
    </Layout>
  );
};

export default EntryPage;
