import Head from "next/head";
import Layout from "../layout";
import ContactComponent from "@/components/common/Contact";
export default function Contact() {
  return (
    <>
      <Head>
        <title>Furkan Karakuzu | Contact</title>
        <meta name="description" content="Furkan Karakuzu's contact." />
      </Head>
      <Layout>
        <div className="mb-5">
          <p>You can send me an e-mail by filling out the fields on this page.</p>
        </div>
        <ContactComponent />
      </Layout>
    </>
  );
}
