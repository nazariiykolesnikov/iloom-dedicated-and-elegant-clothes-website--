import LocationDetector from "./LocationDetection/LocationDetection.jsx";
import ProductSearchEngine from "./ProductSearchEngine/ProductSearchEngine.jsx";
import NavbarButtons from "./NavbarButtons/NavbarButtons.jsx";
import NavbarLogoAndBurgerMenu from "./NavbarLogoAndBurger/NavbarLogoAndBurgerMenu.jsx";
import "./Navbar.css";

const Navbar = () => {
  return (
      <header className="relative header__section">
        <div className="header relative ml-[-115px] mt-[-300px]">
            <NavbarLogoAndBurgerMenu />
            <LocationDetector />
            <ProductSearchEngine />
            <NavbarButtons />
          </div>
        </header>
      );
};

export default Navbar;