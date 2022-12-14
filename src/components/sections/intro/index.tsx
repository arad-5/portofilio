import styles from "./intro.module.css";

const Intro = () => {
    return (
        <section
            className={`${styles.intro} h-screen max-h-[1000px] p-5 text-left md:p-10`}
        >
            <div className="container m-auto flex h-full flex-col items-center justify-center">
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
                    <div className="yapari-bold flex flex-col justify-between uppercase">
                        front-end <br /> web developer
                    </div>
                </h1>
                {/* <p className={`w-full font-yapari uppercase yapari-bold text-[10rem] bottom-0 absolute`}>
                    welcome
                </p> */}
            </div>
        </section>
    );
};
export default Intro;
