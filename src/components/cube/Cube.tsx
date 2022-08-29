import React from "react";
import styles from "./cube.module.css";

type Props = {
    children: JSX.Element[];
};
const Face = ({ children }: { children?: JSX.Element }) => (
    <div className={`${styles.cube__face} overflow-auto`}>{children}</div>
);

const Cube = ({ children }: Props) => {
    console.log(React.Children.map(children, (child) => child));
    return (
        <div className={`${styles.scene} h-screen w-screen overflow-hidden`}>
            <div
                className={`${styles.cube} h-screen w-screen fixed left-0 top-0 transition-transform`}
            >
                {children.map((child, i) => (
                    <Face key={i}>{child}</Face>
                ))}
            </div>
        </div>
    );
};

export default Cube;
