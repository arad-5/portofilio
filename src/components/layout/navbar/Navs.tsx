import { useState } from "react";

//styles
import styles from "./styles/navs.module.css";

//components
import Button from "../../../components/cube/Button";

type Props = {};

const navs: string[] = ["contact", "about", "projects", "skills"];
const Navs = (props: Props) => {
    const [isToggled, setIsToggled] = useState(true);

    return (
        <div className="relative z-10 h-full">
            <button
                className="absolute right-0 z-10 h-full bg-black px-4 text-white lg:hidden"
                onClick={() => setIsToggled((curr) => !curr)}
            >
                toggle
            </button>
            {isToggled && (
                <div
                    className={`${styles.scene} fixed left-0 top-0 flex h-screen w-screen flex-col items-center justify-around bg-gradient-to-t from-transparent via-white to-white lg:relative lg:h-full lg:w-auto lg:flex-row lg:bg-transparent`}
                >
                    <ul
                        className={`${styles.links} yapari-bold-wide z-50 flex flex-col items-center space-y-3 font-yapari uppercase lg:h-full lg:flex-row lg:space-x-3 lg:space-y-0`}
                    >
                        {navs.map((face) => (
                            <li
                                key={face}
                                className={`flex h-full items-center`}
                            >
                                <Button>{face}</Button>
                            </li>
                        ))}
                    </ul>
                    <div className="lg:hidden">Lorem ipsum dolor sit amet.</div>
                </div>
            )}
        </div>
    );
};

export default Navs;


