import Navbar from "./Navbar";

type Props = {
    children: JSX.Element;
};
const index = ({ children }: Props) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
};

export default index;
