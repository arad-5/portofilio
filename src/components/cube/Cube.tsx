import React from "react";
import styles from "./cube.module.css";

type Props = {
    children: JSX.Element[];
};
const Face = ({ children }: { children?: JSX.Element }) => (
    <div className={`${styles.cube__face} overflow-auto`}>{children}</div>
);

const Cube = ({ children }: Props) => {
    return (
        <div className={`${styles.scene} h-screen w-screen overflow-hidden`}>
            <div
                className={`${styles.cube} fixed left-0 top-0 h-screen w-screen transition-transform`}
            >
                {children.map((child, i) => (
                    <Face key={i}>{child}</Face>
                ))}
            </div>
        </div>
    );
};

export default Cube;
