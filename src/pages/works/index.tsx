import Head from "next/head";
import Layout from "../layout";
import WorksComponent from "@/components/common/Works";
export default function Works() {
  return (
    <>
      <Head>
        <title>Furkan Karakuzu | Works</title>
        <meta name="description" content="Furkan Karakuzu's works." />
      </Head>
      <Layout>
        <div className="mb-5">
          <p>
            On this page, there are my repositories that I pulled from{" "}
            <b>GitHub</b> using <b>GitHub REST API</b>. You can visit the
            repository page by clicking the "Details" button.
          </p>
        </div>
        <WorksComponent />
      </Layout>
    </>
  );
}
