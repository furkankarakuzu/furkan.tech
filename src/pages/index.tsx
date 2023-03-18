import Head from 'next/head'
import Experience from '@/components/common/Experience'
import Education from '@/components/common/Education'
import Layout from "./layout";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

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
        <Experience />
        <Education />
      </Layout>
    </>
  )
}
