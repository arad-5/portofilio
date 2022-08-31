import styles from "./button.module.css";

type Props = {
    children: string | JSX.Element;
    onClick?: () => void;
    href?: string;
    additionalClass?: string;
};

const Button = ({ children, onClick, additionalClass }: Props) => {
    return (
        <button className={`${styles.button} h-full text-lg`} onClick={onClick}>
            <div
                className={`${styles.cube} relative flex h-full w-full items-center text-center ${additionalClass}`}
            >
                <span
                    className={`${styles.face} absolute left-0 top-0 h-full w-full border border-neutral-400`}
                ></span>
                <span
                    className={`${styles.face} absolute left-0 top-0 h-full w-full border border-neutral-400`}
                ></span>
                <span
                    className={`${styles.face} absolute left-0 top-0 h-full w-full border border-neutral-400`}
                ></span>
                <span
                    className={`${styles.face} absolute left-0 bottom-0 h-full w-full border border-neutral-400`}
                ></span>
                <span
                    className={`${styles.face} absolute right-0 top-0 h-full w-full border border-neutral-400`}
                ></span>
                <span
                    className={`${styles.face} absolute left-0 top-0 h-full w-full border border-neutral-400`}
                ></span>
                {children}
            </div>
        </button>
    );
};

export default Button;
