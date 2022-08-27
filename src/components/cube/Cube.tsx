import React from "react";
import styles from "./cube.module.css";

type Props = {
    children: JSX.Element[];
};
const Face = ({ children }: { children: JSX.Element }) => (
    <div className={`${styles.cube__face} overflow-auto`}>{children}</div>
);

const Cube = ({ children }: Props) => {
    console.log(React.Children.map(children, (child) => child));
    return (
        <div className={`${styles.scene}`}>
            <div
                className={`${styles.cube} relative transition-transform h-screen w-screen`}
            >
                {children.map((child, i) => (
                    <Face key={i}>{child}</Face>
                ))}
            </div>
        </div>
    );
};

export default Cube;
