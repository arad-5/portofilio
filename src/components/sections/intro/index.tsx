import styles from "./intro.module.css";

const Intro = () => {
    return (
        <section
            className={`${styles.intro} flex h-screen w-full flex-col items-center justify-between p-5 text-left md:p-10`}
        >
            <div className={`yapari-bold w-full font-yapari text-3xl`}>
                v<sup>02</sup>
            </div>
            <h1
                className={`${styles.heading1} sm:space-xd-10 flex-col space-y-10 text-center font-yapari text-4xl font-normal sm:flex-row sm:text-5xl`}
            >
                <div>
                    <div className="yapari-bold text-left">Hi, Im</div>
                    <div
                        className={`yapari-bold-widest mt-5 text-4xl uppercase sm:text-8xl`}
                    >
                        Arad
                    </div>
                    <div
                        className={`${styles.version} yapari-bold-wide text-4xl font-[900] uppercase sm:text-7xl`}
                    >
                        Taghikhani
                    </div>
                </div>
                <div className="yapari-bold flex flex-col justify-between">
                    front-end <br /> web developer
                </div>
            </h1>
            <p className={`w-full font-yapari italic md:text-6xl`}>welcome</p>
        </section>
    );
};
export default Intro;
