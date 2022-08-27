import type { NextPage } from "next";
import Head from "next/head";

//components
import Cube from "../components/cube/Cube";
import Intro from "../components/sections/intro";

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

            <main className="h-screen flex justify-center items-center">
                <Cube>{[<Intro key="header" />, <Intro key="header" />]}</Cube>
            </main>
        </div>
    );
};

export default Home;
