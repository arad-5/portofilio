import styles from "./intro.module.css";

const Intro = () => {
    return (
        <section
            className={`${styles.intro} flex h-screen w-full flex-col items-center justify-between p-5 text-left md:p-10`}
        >
            <div className={`w-full font-yapari text-3xl font-[900]`}>
                v<sup>02</sup>
            </div>
            <h1
                className={`${styles.heading1} sm:space-xd-10 flex-col space-y-10 text-center font-yapari text-4xl font-normal sm:flex-row sm:text-5xl`}
            >
                <div>
                    <div className="text-left font-bold">Hi, Im</div>
                    <div
                        className={`${styles.header_firstname} text-4xl font-[900] uppercase sm:text-8xl`}
                    >
                        Arad
                    </div>
                    <div
                        className={`${styles.header_lastnames} ${styles.version} text-4xl font-[900] uppercase sm:text-7xl`}
                    >
                        Taghikhani
                    </div>
                </div>
                <div className="flex flex-col justify-between font-bold">
                    front-end <br /> web developer
                </div>
            </h1>
            <p className={`w-full font-yapari font-bold md:text-3xl`}>
                welcome to my <br />
                portofilio
            </p>
        </section>
    );
};
export default Intro;
