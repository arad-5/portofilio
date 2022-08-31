import { Skill as SkillType } from "../../../api/types/Skill";
import Skill from "./Skill";

//types
type Props = {
    skills: SkillType[];
};
const index = ({ skills }: Props): JSX.Element => {
    console.log(skills);

    return (
        <section className="dark h-screen bg-black p-10">
            <div className="container mx-auto">
                <h2 className="font-widest mb-10 font-yapari text-3xl font-bold uppercase sm:text-4xl md:text-5xl lg:text-7xl">
                    S
                    <span className="text-xl font-semibold sm:text-2xl md:text-3xl lg:text-5xl">
                        kills
                    </span>
                </h2>
                <div className="space-y-5">
                    {skills.map((skill) => (
                        <Skill key={skill.name} skill={skill} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default index;
