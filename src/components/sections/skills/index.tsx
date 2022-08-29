import { Skill } from "../../../api/types/Skill";

//types
type Props = {
    skills: Skill[];
};
const index = ({ skills }: Props): JSX.Element => {
    console.log(skills);

    return (
        <section className="dark h-screen bg-black p-10">
            <h2 className="font-widest font-yapari text-3xl font-bold uppercase sm:text-4xl md:text-5xl lg:text-7xl">
                S
                <span className="text-xl font-semibold sm:text-2xl md:text-3xl lg:text-5xl">
                    kills
                </span>
            </h2>
            <div>
                {skills.map((skill) => (
                    <div key={skill.name}>{skill.name}</div>
                ))}
            </div>
        </section>
    );
};

export default index;
