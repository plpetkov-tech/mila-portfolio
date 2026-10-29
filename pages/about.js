import { useRef } from "react";
import Layout from "../components/Layout";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import data from "../data/portfolio.json";

const { about } = data;

// Group roles by "Design Experience" / "Corporate Experience", keeping data order
const experienceGroups = Object.entries(
  about.experience.reduce((groups, job) => {
    (groups[job.group] ||= []).push(job);
    return groups;
  }, {})
);

const SectionLabel = ({ children }) => (
  <h3 className="text-sm uppercase tracking-widest opacity-50">{children}</h3>
);

const About = () => {
  const textOne = useRef();
  const textTwo = useRef();

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <Layout title="About" description={about.tagline} image={about.banner}>
      <div className="mt-10 p-2 laptop:p-0">
        <h1 ref={textOne} className="text-6xl laptop:text-8xl text-bold">
          About.
        </h1>
        <h2
          ref={textTwo}
          className="mt-5 text-2xl tablet:text-4xl laptop:text-5xl w-full laptop:w-4/5"
        >
          {about.tagline}
        </h2>
        <img
          className="mt-10 w-full max-h-96 object-cover rounded-lg shadow-lg"
          src={about.banner}
          alt="Artwork banner by Mila"
        ></img>
      </div>

      {about.sections.map((section) => (
        <section key={section.label} className="mt-10 laptop:mt-20 p-2 laptop:p-0">
          <SectionLabel>{section.label}</SectionLabel>
          <h2 className="mt-2 text-3xl laptop:text-5xl text-gradient">
            {section.title}
          </h2>
          <p className="mt-5 text-lg laptop:text-xl opacity-80 w-full laptop:w-4/5">
            {section.body}
          </p>
        </section>
      ))}

      {experienceGroups.map(([group, roles]) => (
        <section key={group} className="mt-10 laptop:mt-20 p-2 laptop:p-0">
          <SectionLabel>{group}</SectionLabel>
          <div className="mt-5 grid grid-cols-1 gap-10">
            {roles.map((job) => (
              <div key={job.role + job.company}>
                <div className="flex flex-col tablet:flex-row tablet:items-baseline tablet:justify-between gap-1">
                  <h2 className="text-2xl laptop:text-4xl">
                    {job.role}{" "}
                    <span className="text-gradient">at {job.company}</span>
                  </h2>
                  <span className="text-sm opacity-50">{job.dates}</span>
                </div>
                <ul className="list-disc ml-5 mt-3 w-full laptop:w-4/5">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="py-1 text-lg opacity-80">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="mt-10 laptop:mt-20 p-2 laptop:p-0">
        <SectionLabel>Skills</SectionLabel>
        <div className="mt-5 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-6">
          {Object.entries(about.skills).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-xl font-medium">{group}</h4>
              <ul className="list-disc ml-5 mt-2">
                {items.map((item) => (
                  <li key={item} className="py-1 opacity-80">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 laptop:mt-20 p-2 laptop:p-0">
        <SectionLabel>Recent Certifications</SectionLabel>
        <div className="mt-5 grid grid-cols-1 tablet:grid-cols-2 gap-6">
          {about.certifications.map((cert) => (
            <div key={cert.title}>
              <h4 className="text-xl font-medium">{cert.title}</h4>
              <p className="opacity-60">
                {cert.issuer} · {cert.date}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 laptop:mt-20 p-2 laptop:p-0 grid grid-cols-1 tablet:grid-cols-2 gap-10">
        <div>
          <SectionLabel>Education</SectionLabel>
          {about.education.map((item) => (
            <div key={item.title} className="mt-5">
              <h4 className="text-xl font-medium">{item.title}</h4>
              <p className="opacity-60">
                {item.school} · {item.date}
              </p>
            </div>
          ))}
        </div>
        <div>
          <SectionLabel>Languages</SectionLabel>
          <ul className="mt-5 grid grid-cols-2 gap-y-2">
            {about.languages.map((lang) => (
              <li key={lang.name}>
                <span className="text-xl">{lang.name}</span>{" "}
                <span className="opacity-50">{lang.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default About;
