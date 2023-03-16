import Head from "next/head";
import Image from "next/image";
export default function Notes() {
  return (
    <>
      <Head>
        <title>Furkan Karakuzu | Notes</title>
        <meta name="description" content="Furkan Karakuzu's notes." />
      </Head>
      <h2 className="mb-4 fw-bold">Notes</h2>
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
    </>
  );
}
