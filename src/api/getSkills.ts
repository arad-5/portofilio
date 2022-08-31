import request from "./requst";

//types
import { Skill } from "./types/Skill";

// const getSkills = async (): Promise<Skill[]> => {
//     const { skills } = await request(`
//         {
//             skills(orderBy: publishedAt_ASC) {
//             image {
//                 url
//             }
//             name
//             techColor {
//                 hex
//             }
//             justExperienced
//             skillLevel
//             }
//         }
//     `);
//     return skills;
// };

// export default getSkills;
