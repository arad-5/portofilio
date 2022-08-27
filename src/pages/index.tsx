import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Arad Taghikhani</title>
                <meta
                    name="description"
                    content="Hi ,I am Arad Taghikhani front-end web developer, welcome to my portofilio"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <header className="text-red-500">
                    <h1>Hi, Im Arad Taghikhani front-end web developer</h1>
                </header>
            </main>
        </div>
    );
};

export default Home;
