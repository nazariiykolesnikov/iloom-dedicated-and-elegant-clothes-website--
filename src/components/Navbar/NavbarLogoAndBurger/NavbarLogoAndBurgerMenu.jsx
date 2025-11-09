import ILoomLogo from "./ILoomLogo/ILoomLogo.jsx";
import BurgerMenu from "./BurgerMenu/BurgerMenu.jsx";
import "../Navbar.css";

const NavbarLogoAndBurgerMenu = () => {
    return (
        <div>
            <div className="i-loom-button__section w-[150px] h-[36px] mt-[-5px]">
                <ILoomLogo />
                <BurgerMenu />
            </div>
        </div>
    );
};

export default NavbarLogoAndBurgerMenu;