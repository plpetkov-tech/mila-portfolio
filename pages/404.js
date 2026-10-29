import Layout from "../components/Layout";
import Button from "../components/Button";

const NotFoundPage = () => (
  <Layout title="404: Not found" footer={false}>
    <div className="mt-20 p-2 laptop:p-0">
      <h1 className="text-6xl laptop:text-8xl text-bold">404.</h1>
      <p className="mt-5 text-xl opacity-70">
        You just hit a route that doesn&apos;t exist...
      </p>
      <Button type="primary" href="/" classes="mt-10">
        Return Home
      </Button>
    </div>
  </Layout>
);

export default NotFoundPage;
