import type { NextPage } from "next";
import Head from "next/head";
import getSkills from "../api/getSkills";
import request from "../api/requst";

//components
import Cube from "../components/cube/Cube";
import Intro from "../components/sections/intro";
import Skills from "../components/sections/skills";

//types
import { Skill } from "../api/types/Skill";
import { useEffect } from "react";
type Props = {
    skills: Skill[];
};
const Home: NextPage<Props> = ({ skills }) => {
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
                <Cube>
                    {[
                        <main key="header">
                            <Intro />
                            <Skills skills={skills} />
                        </main>,
                    ]}
                </Cube>
            </main>
        </div>
    );
};

export default Home;

export const getStaticProps = async () => {
    const skills = await getSkills();

    return {
        props: {
            skills,
        },
    };
};
