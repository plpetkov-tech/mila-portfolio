import EntryPage from "../../components/EntryPage";
import { makeStaticPaths, makeStaticProps } from "../../utils/entries";

export const getStaticProps = (ctx) => makeStaticProps("projects")(ctx);
export const getStaticPaths = () => makeStaticPaths("projects")();

export default EntryPage;
