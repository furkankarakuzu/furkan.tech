import Head from "next/head";
export default function Contact() {
    return (
        <>
            <Head>
                <title>Furkan Karakuzu | Contact</title>
                <meta name="description" content="Furkan Karakuzu contact." />
            </Head>
            <h2 className="my-5 fw-bold text-light">Contact</h2>
            <img src={'/404.gif'} alt={'404'} width="100%"/>
        </>
    )
}