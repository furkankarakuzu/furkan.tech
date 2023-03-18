import Head from "next/head";
import Layout from "../Layout";
export default function Notes() {
  return (
    <>
      <Head>
        <title>Furkan Karakuzu | Contact</title>
        <meta name="description" content="Furkan Karakuzu's contact." />
      </Head>
      <Layout>
      <h2 className="mb-4 fw-bold">Contact</h2>
      <div className="text-center">
        <h5>the under construction</h5>
        <iframe
          src="https://giphy.com/embed/qgQUggAC3Pfv687qPC"
          width="480"
          height="360"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
        <p>
          <a href="https://giphy.com/gifs/dommespace-domme-space-programador-qgQUggAC3Pfv687qPC">
            via GIPHY
          </a>
        </p>
      </div>
      </Layout>
    </>
  );
}
