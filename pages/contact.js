import { useRef } from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import data from "../data/portfolio.json";

const FIELDS = [
  { name: "name", type: "text", placeholder: "Your Name", required: true },
  { name: "email", type: "email", placeholder: "Your Email", required: true },
  { name: "company", type: "text", placeholder: "Your Company" },
  { name: "phone", type: "tel", placeholder: "Your Phone" },
];

const Contact = () => {
  const text = useRef();
  useIsomorphicLayoutEffect(() => {
    stagger([text.current], { y: 30 }, { y: 0 });
  }, []);

  const inputClass =
    "w-full p-4 rounded-lg outline-none ring-1 focus:ring-2 ring-purple bg-transparent placeholder-black/50 dark:placeholder-white/50";

  return (
    <Layout
      title="Contact"
      description="Have a project in mind, need design consultation, or just want to say hello? Get in touch with Mila."
      footer={false}
    >
      <div className="mt-10 p-2 laptop:p-0">
        <h1 ref={text} className="text-6xl laptop:text-8xl text-bold">
          Contact.
        </h1>
        <h2 className="mt-5 text-2xl tablet:text-4xl text-gradient w-full laptop:w-4/5">
          Let&apos;s Create Exceptional Experiences Together
        </h2>
        <p className="mt-5 text-lg laptop:text-xl opacity-70 w-full laptop:w-3/5">
          Have a project in mind, need design consultation, or just want to say
          hello? Fill out the form below or email me at{" "}
          <a href={`mailto:${data.email}`} className="underline link">
            {data.email}
          </a>
          .
        </p>

        {/* Netlify Forms: detected from the static HTML at deploy time */}
        <form
          className="mt-10 w-full laptop:w-3/5"
          name="contact"
          method="POST"
          action="/success/"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don&apos;t fill this out: <input name="bot-field" />
            </label>
          </p>
          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {FIELDS.map((field) => (
              <label key={field.name}>
                <span className="sr-only">{field.placeholder}</span>
                <input className={inputClass} {...field} />
              </label>
            ))}
          </div>
          <label>
            <span className="sr-only">Message</span>
            <textarea
              className={`mt-4 ${inputClass}`}
              rows="6"
              placeholder="Tell me about your project needs"
              name="message"
              required
            ></textarea>
          </label>
          <Button type="primary" submit classes="mt-4">
            Send Message
          </Button>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
