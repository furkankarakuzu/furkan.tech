import Head from "next/head";
import Experience from "@/components/common/Experience";
import Education from "@/components/common/Education";
import Layout from "./layout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Furkan Karakuzu</title>
        <meta name="description" content="Furkan Karakuzu personal site." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="mb-5">
          <p>
            I have been working as a <b>Frontend Developer</b> for more than 2
            years. During this time, I worked with popular frameworks such as{" "}
            <b>Vue.js, Nuxt.js, React.js, and Next.js </b>. I am a skilled
            developer specializing in <b>JavaScript</b>. My desire to touch
            users pushed me to specialize in frontend.
          </p>
          <p>
            In the early stages of my career, I continued in this field thanks
            to the pleasure I got from working with <b>Vue.js</b>. While I
            wanted to improve myself more, I understood the importance of type
            safety and started working with <b>TypeScript</b>. During this time,
            I developed projects with Bootstrap using <b>SCSS</b> for design.
            When I started to work with bigger teams, I realized the importance
            of writing documentation, and I documented the components I coded
            with <b>Vue.js</b> and <b>TypeScript</b> with the <b>StoryBook</b>.
          </p>
          <p>
            I also took part in the <b>Backend</b> role according to the
            conditions of the projects I worked on. Since I learned coding with{" "}
            <b>PHP</b>, I took part in backend projects developed with{" "}
            <b>Laravel</b>. In the projects I do as a hobby, I develop backend
            applications with <b>Nest.js</b>.
          </p>
          <p>
            I&apos;m currently a Frontend Developer on a team that builds e-commerce
            websites with <b>Salesforce</b>, and I&apos;m developing on the{" "}
            <b>React Pwa Kit.</b>
          </p>
        </div>
        <Experience />
        <Education />
      </Layout>
    </>
  );
}
