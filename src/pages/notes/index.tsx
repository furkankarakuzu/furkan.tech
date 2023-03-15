import Head from "next/head";
export default function Notes() {
    return (
        <>
            <Head>
                <title>Furkan Karakuzu | Notes</title>
                <meta name="description" content="Furkan Karakuzu's notes." />
            </Head>
            <h2 className="my-5 fw-bold text-light">Notes</h2>
            <img src={'/404.gif'} alt={'404'} width="100%"/>
        </>
    )
}