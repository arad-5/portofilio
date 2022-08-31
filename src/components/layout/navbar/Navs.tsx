import { useState } from "react";

//styles
import styles from "./styles/navs.module.css";

//components
import Button from "../../../components/cube/Button";

const navs: string[] = ["contact", "about", "projects", "skills"];
const Navs = (): JSX.Element => {
    const [isToggled, setIsToggled] = useState<boolean>(true);

    return (
        <div className="relative z-10 h-full">
            <NavsButton isToggled={isToggled} setIsToggled={setIsToggled} />
            <NavsContainer isToggled={isToggled} />
        </div>
    );
};

export default Navs;

const NavsButton = ({
    setIsToggled,
    isToggled,
}: {
    setIsToggled: (setter: (curr: boolean) => boolean) => void;
    isToggled: boolean;
}) => (
    <div className="absolute right-0 z-10 h-full w-16 lg:hidden">
        <Button
            additionalClass="p-2 w-16 flex items-center justify-center text-white"
            onClick={() => {
                setIsToggled((curr) => !curr);
            }}
        >
            <>
                <span
                    className={`absolute h-[4px] w-8 transition-transform ${
                        isToggled
                            ? "-translate-y-[5px]"
                            : "translate-y-0 rotate-45"
                    } bg-black`}
                ></span>
                <span
                    className={`absolute h-[4px] w-8 transition-transform ${
                        isToggled
                            ? "translate-y-[5px]"
                            : "translate-y-0 -rotate-45"
                    } bg-black`}
                ></span>
            </>
        </Button>
    </div>
);

const NavsContainer = ({ isToggled }: { isToggled: boolean }) => (
    <div
        className={`${
            styles.scene
        } fixed left-0 top-0 flex h-screen w-screen flex-col items-center
         justify-around bg-gradient-to-t from-transparent via-white to-white lg:relative lg:h-full
         lg:w-auto lg:flex-row lg:bg-transparent lg:bg-none ${
             isToggled ? "hidden lg:flex" : ""
         }`}
    >
        <ul
            className={`${styles.links} yapari-bold-wide z-50 flex flex-col items-center
            space-y-4 font-yapari uppercase lg:h-full lg:flex-row lg:space-x-3 lg:space-y-0`}
        >
            {navs.map((face) => (
                <li key={face} className={`flex h-full items-center`}>
                    <Button additionalClass="px-8 py-5">{face}</Button>
                </li>
            ))}
        </ul>
        <div className="lg:hidden">Lorem ipsum dolor sit amet.</div>
    </div>
);
