import Layout from "../components/Layout";
import Button from "../components/Button";

const Success = () => (
  <Layout title="Message Sent" footer={false}>
    <div className="mt-20 p-2 laptop:p-0">
      <h1 className="text-6xl laptop:text-8xl text-bold">Thank you!</h1>
      <p className="mt-5 text-xl opacity-70">
        Your message has been sent successfully. I&apos;ll get back to you soon.
      </p>
      <Button type="primary" href="/" classes="mt-10">
        Return Home
      </Button>
    </div>
  </Layout>
);

export default Success;
