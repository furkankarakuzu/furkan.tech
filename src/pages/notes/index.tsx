import Head from "next/head";
import Layout from "../layout";
import NotesComponent from "@/components/common/Notes";
export default function Notes() {
  return (
    <>
      <Head>
        <title>Furkan Karakuzu | Notes</title>
        <meta name="description" content="Furkan Karakuzu's notes." />
      </Head>
      <Layout>
        <div className="mb-5">
          <p>
            There are videos, blog posts, etc. on this page that I like, find
            interesting and think will help me. You can visit the
            repository page by clicking the "View More" button.
          </p>
        </div>
        <NotesComponent />
      </Layout>
    </>
  );
}
