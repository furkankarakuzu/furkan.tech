import Head from "next/head";
import Image from "next/image";
export default function Notes() {
  return (
    <>
      <Head>
        <title>Furkan Karakuzu | Notes</title>
        <meta name="description" content="Furkan Karakuzu's notes." />
      </Head>
      <h2 className="my-5 fw-bold text-light">Notes</h2>
      <Image
        src={"/404.gif"}
        alt={"404"}
        width={700}
        height={475}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </>
  );
}
