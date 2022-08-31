import Button from "../../cube/Button";
import Navs from "./Navs";

const Navbar = (): JSX.Element => {
    return (
        <header className="fixed top-0 left-0 z-50 w-screen">
            <div className="container mx-auto flex h-20 items-center justify-between py-2 px-10 font-bold">
                <h1 className="yapari-bold-widest z-20 flex h-full items-center border border-neutral-300 p-2 font-yapari text-3xl">
                    A
                </h1>
                <Navs />
            </div>
        </header>
    );
};

export default Navbar;
