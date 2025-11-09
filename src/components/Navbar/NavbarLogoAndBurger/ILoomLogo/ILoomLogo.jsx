import { assets } from "../../../../assets/data/assets.js";
import "../../Navbar.css";

const ILoomLogo = () => {
    return (
        <img
            src={assets.i_loom_logo}
            alt="Logo"
            className="w-full h-full object-contain transition-transform duration-300 ease-in-out"
        />
    );
}

export default ILoomLogo;