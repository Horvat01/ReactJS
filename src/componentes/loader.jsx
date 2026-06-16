import { BounceLoader } from "react-spinners";

function Loader() {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <BounceLoader color="#0ccee7" />
        </div>
    );
}

export default Loader;