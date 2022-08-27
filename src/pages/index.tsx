import type { NextPage } from "next";
import Head from "next/head";
import Cube from "../components/Cube";

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
                <Cube>
                    {[
                        <header key="header">
                            <h1>
                                Hi, Im Arad Taghikhani front-end web developer
                            </h1>
                        </header>,
                        <header key="headerr">
                            <h1>
                                Hi, Im Arad Taghikhani front-end web developer
                            </h1>
                        </header>,
                        <header key="header">
                            <h1>
                                Hi, Im Arad Taghikhani front-end web developer
                            </h1>
                        </header>,
                        <header key="headerr">
                            <h1>
                                Hi, Im Arad Taghikhani front-end web developer
                            </h1>
                        </header>,
                        <header key="header">
                            <h1>
                                Hi, Im Arad Taghikhani front-end web developer
                            </h1>
                        </header>,
                    ]}
                </Cube>
            </main>
        </div>
    );
};

export default Home;
