import styles from "./button.module.css";

type Props = {
    children: string;
    handleClick?: () => void;
    href?: string;
};

const Button = ({ children }: Props) => {
    return (
        <button className={`${styles.button} text-lg`}>
            <div
                className={`${styles.cube} relative flex h-[3em] w-full items-center px-8 text-center`}
            >
                {children}
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
            </div>
        </button>
    );
};

export default Button;
