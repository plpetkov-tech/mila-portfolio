import EntryPage from "../../components/EntryPage";
import { makeStaticPaths, makeStaticProps } from "../../utils/entries";

export const getStaticProps = (ctx) => makeStaticProps("arts")(ctx);
export const getStaticPaths = () => makeStaticPaths("arts")();

export default EntryPage;
