import { useState } from "react";
import { assets } from "../../../../assets/data/assets.js";
import { menuitems } from "../../../../assets/data/menu-item.js";
import { NavLink } from "react-router-dom";
import "../../Navbar.css";

const BurgerMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);

    return (
        <div className="relative top-[42px] r">
            <div
                className="burger-menu__section absolute top-[-83px] left-[220px] w-[31px] h-[31px] flex items-center justify-center cursor-pointer"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <img
                    src={assets.burger_menu}
                    alt="Menu"
                    className="burger-menu__button w-full h-full object-contain transition-transform duration-300 ease-in-out"
                    style={{ transform: menuOpen ? "rotate(360deg)" : "rotate(0deg)" }}
                />
            </div>
            {menuOpen && (
                <div className="absolute top-[93px] left-[100px] w-[288px] h-[715px] bg-gradient-to-br from-[#fc8bd1] to-[#fdb1e2] rounded-[30px] flex flex-col items-center py-6 z-50 shadow-[0_8px_25px_rgba(0,0,0,0.25)] backdrop-blur-md animate-fade-in">
                    <nav className="flex flex-col gap-3 text-white text-[17px] font-semibold w-full px-6 mt-[10px] ml-[15px]">
                        {menuitems.map(({ path, label, submenu }) => (
                            <div key={path} className="relative">
                                <NavLink
                                    onClick={() => {
                                        if (!submenu) setMenuOpen(false);
                                        setActiveSubmenu(activeSubmenu === path ? null : path);
                                    }}
                                    className="block w-full px-6 py-3 rounded-xl m-[12px] text-[#ffffff] text-[20px] tracking-wide bg-gradient-to-r from-[#fc8bd1]/30 to-[#fc8bd1]/10 transition-all duration-300 ease-in-out no-underline font-[600]"
                                >
                      <span className="flex items-center gap-3 font-montserrat">
                            {label}
                              {submenu && (
                                  <button
                                      type="button"
                                      onClick={(e) => {
                                          e.stopPropagation();
                                          setActiveSubmenu(activeSubmenu === path ? null : path);
                                      }}
                                      className="ml-2 w-[28px] h-[28px] rounded-full flex items-center justify-center bg-transparent border-none cursor-pointer transition-all duration-300 ease-in-out active:scale-90"
                                  >
                                      <img
                                          src={assets.plus}
                                          alt="Plus"
                                          className={`w-[17px] h-[17px] transition-transform duration-300 ${
                                              activeSubmenu === path ? "rotate-45" : ""
                                          }`}
                                      />
                                  </button>
                              )}
                          </span>
                                </NavLink>
                                {activeSubmenu === path && submenu && (
                                    <div
                                        className="mt-2 ml-4 flex flex-col gap-2 pl-3 animate-fade-in-slow text-[#ffffff]"
                                    >
                                        {submenu.map(({ path, label }) => (
                                            <NavLink
                                                key={path}
                                                to={path}
                                                onClick={() => {
                                                    setMenuOpen(false);
                                                    setActiveSubmenu(null);
                                                }}
                                                className="text-[#ffffff] text-[15px] py-[7px] ml-[-10px] rounded-[10px] hover:bg-white hover:text-[#fafafa] hover:shadow-[0_0_10px_rgba(255,255,255,0.6)] transition-all duration-300 ease-in-out hover:translate-x-[4px] no-underline"
                                            >
                                                {label}
                                            </NavLink>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>
            )}
        </div>
    );
}

export default BurgerMenu;