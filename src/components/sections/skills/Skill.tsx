//types
import { Skill } from "../../../api/types/Skill";
type Props = {
    skill: Skill;
};

const Skill = ({ skill }: Props) => {
    return (
        <div className="flex items-center space-x-5">
            <img
                src={skill.image.url}
                alt={`${skill.name} logo`}
                className="sm:h-20 sm:w-20 h-12 w-12"
            />
            <div>
                <h3 className="text-xl sm:text-3xl">{skill.name}</h3>
            </div>
        </div>
    );
};

export default Skill;
